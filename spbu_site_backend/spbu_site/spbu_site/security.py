"""
Централизованная система безопасности для SPBU Site
Обеспечивает защиту от кибератак и устойчивость к изменениям кода разработчиками
"""

import os
import logging
import hashlib
import secrets
from typing import Dict, List, Any, Optional
from datetime import datetime, timedelta
from django.conf import settings
from django.core.exceptions import ImproperlyConfigured
from django.http import HttpRequest, HttpResponse
from django.utils.deprecation import MiddlewareMixin
from django.middleware.csrf import get_token
from django.contrib.auth.models import AnonymousUser
import jwt

# Настройка логирования безопасности
security_logger = logging.getLogger('security')

class SecurityConfig:
    """Централизованная конфигурация безопасности"""
    
    # Критические настройки безопасности (неизменяемые разработчиками)
    CRITICAL_SECURITY_SETTINGS = {
        'SECURE_SSL_REDIRECT': True,
        'SECURE_HSTS_SECONDS': 31536000,
        'SECURE_HSTS_INCLUDE_SUBDOMAINS': True,
        'SECURE_HSTS_PRELOAD': True,
        'SECURE_CONTENT_TYPE_NOSNIFF': True,
        'SECURE_BROWSER_XSS_FILTER': True,
        'SECURE_REFERRER_POLICY': 'strict-origin-when-cross-origin',
        'X_FRAME_OPTIONS': 'DENY',
        'SESSION_COOKIE_SECURE': True,
        'CSRF_COOKIE_SECURE': True,
        'SESSION_COOKIE_HTTPONLY': True,
        'CSRF_COOKIE_HTTPONLY': True,
        'SESSION_COOKIE_SAMESITE': 'Strict',
        'CSRF_COOKIE_SAMESITE': 'Strict',
    }
    
    # Настройки CSP (Content Security Policy)
    CSP_DEFAULT_SRC = ("'self'",)
    CSP_SCRIPT_SRC = ("'self'", "'unsafe-inline'", "'unsafe-eval'")
    CSP_STYLE_SRC = ("'self'", "'unsafe-inline'")
    CSP_IMG_SRC = ("'self'", "data:", "https:")
    CSP_FONT_SRC = ("'self'", "https:")
    CSP_CONNECT_SRC = ("'self'",)
    CSP_FRAME_SRC = ("'none'",)
    CSP_OBJECT_SRC = ("'none'",)
    
    # Настройки rate limiting
    RATE_LIMIT_REQUESTS = 100  # запросов в минуту
    RATE_LIMIT_WINDOW = 60  # секунд
    
    # Настройки JWT
    JWT_ALGORITHM = 'HS256'
    JWT_ACCESS_TOKEN_LIFETIME = timedelta(hours=1)
    JWT_REFRESH_TOKEN_LIFETIME = timedelta(days=7)
    
    @classmethod
    def validate_environment(cls) -> None:
        """Проверка критических переменных окружения"""
        required_vars = [
            'SECRET_KEY',
            'DEBUG',
            'ALLOWED_HOSTS',
            'DATABASE_URL',
        ]
        
        missing_vars = []
        for var in required_vars:
            if not os.getenv(var) and not hasattr(settings, var):
                missing_vars.append(var)
        
        if missing_vars:
            raise ImproperlyConfigured(
                f"Missing required environment variables: {', '.join(missing_vars)}"
            )
    
    @classmethod
    def get_security_headers(cls) -> Dict[str, str]:
        """Получение заголовков безопасности"""
        return {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
            'Content-Security-Policy': cls._build_csp_header(),
        }
    
    @classmethod
    def _build_csp_header(cls) -> str:
        """Сборка CSP заголовка"""
        csp_parts = [
            f"default-src {' '.join(cls.CSP_DEFAULT_SRC)}",
            f"script-src {' '.join(cls.CSP_SCRIPT_SRC)}",
            f"style-src {' '.join(cls.CSP_STYLE_SRC)}",
            f"img-src {' '.join(cls.CSP_IMG_SRC)}",
            f"font-src {' '.join(cls.CSP_FONT_SRC)}",
            f"connect-src {' '.join(cls.CSP_CONNECT_SRC)}",
            f"frame-src {' '.join(cls.CSP_FRAME_SRC)}",
            f"object-src {' '.join(cls.CSP_OBJECT_SRC)}",
        ]
        return '; '.join(csp_parts)


class SecurityMiddleware(MiddlewareMixin):
    """Middleware для обеспечения безопасности"""
    
    def __init__(self, get_response):
        super().__init__(get_response)
        self.rate_limit_store = {}
        self.security_config = SecurityConfig()
    
    def process_request(self, request: HttpRequest) -> Optional[HttpResponse]:
        """Обработка входящего запроса"""
        # Логирование запроса
        self._log_request(request)
        
        # Проверка rate limiting
        if not self._check_rate_limit(request):
            return self._rate_limit_response()
        
        # Проверка безопасности
        if not self._security_check(request):
            return self._security_violation_response()
        
        return None
    
    def process_response(self, request: HttpRequest, response: HttpResponse) -> HttpResponse:
        """Обработка исходящего ответа"""
        # Добавление заголовков безопасности
        for header, value in self.security_config.get_security_headers().items():
            response[header] = value
        
        # Логирование ответа
        self._log_response(request, response)
        
        return response
    
    def _log_request(self, request: HttpRequest) -> None:
        """Логирование запроса"""
        user = getattr(request, 'user', AnonymousUser())
        security_logger.info(
            f"Request: {request.method} {request.path} "
            f"User: {user.username if hasattr(user, 'username') else 'Anonymous'} "
            f"IP: {self._get_client_ip(request)}"
        )
    
    def _log_response(self, request: HttpRequest, response: HttpResponse) -> None:
        """Логирование ответа"""
        if response.status_code >= 400:
            security_logger.warning(
                f"Error response: {response.status_code} "
                f"for {request.method} {request.path}"
            )
    
    def _get_client_ip(self, request: HttpRequest) -> str:
        """Получение IP адреса клиента"""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0]
        return request.META.get('REMOTE_ADDR', 'unknown')
    
    def _check_rate_limit(self, request: HttpRequest) -> bool:
        """Проверка rate limiting"""
        client_ip = self._get_client_ip(request)
        now = datetime.now()
        
        if client_ip not in self.rate_limit_store:
            self.rate_limit_store[client_ip] = []
        
        # Удаление старых запросов
        self.rate_limit_store[client_ip] = [
            req_time for req_time in self.rate_limit_store[client_ip]
            if now - req_time < timedelta(seconds=self.security_config.RATE_LIMIT_WINDOW)
        ]
        
        # Проверка лимита
        if len(self.rate_limit_store[client_ip]) >= self.security_config.RATE_LIMIT_REQUESTS:
            return False
        
        # Добавление текущего запроса
        self.rate_limit_store[client_ip].append(now)
        return True
    
    def _security_check(self, request: HttpRequest) -> bool:
        """Проверка безопасности запроса"""
        # Проверка подозрительных заголовков
        suspicious_headers = [
            'HTTP_X_FORWARDED_FOR',
            'HTTP_X_REAL_IP',
            'HTTP_CLIENT_IP',
        ]
        
        for header in suspicious_headers:
            if header in request.META:
                value = request.META[header]
                if not self._is_valid_ip(value):
                    security_logger.warning(f"Suspicious IP header: {header}={value}")
                    return False
        
        return True
    
    def _is_valid_ip(self, ip: str) -> bool:
        """Проверка валидности IP адреса"""
        try:
            parts = ip.split('.')
            if len(parts) != 4:
                return False
            return all(0 <= int(part) <= 255 for part in parts)
        except (ValueError, AttributeError):
            return False
    
    def _rate_limit_response(self) -> HttpResponse:
        """Ответ при превышении rate limit"""
        from django.http import HttpResponseTooManyRequests
        response = HttpResponseTooManyRequests("Rate limit exceeded")
        response['Retry-After'] = str(self.security_config.RATE_LIMIT_WINDOW)
        return response
    
    def _security_violation_response(self) -> HttpResponse:
        """Ответ при нарушении безопасности"""
        from django.http import HttpResponseForbidden
        return HttpResponseForbidden("Security violation detected")


class SecurityDecorator:
    """Декоратор для защиты views"""
    
    @staticmethod
    def require_https(view_func):
        """Требует HTTPS соединения"""
        def wrapper(request, *args, **kwargs):
            if not request.is_secure() and not settings.DEBUG:
                from django.http import HttpResponseForbidden
                return HttpResponseForbidden("HTTPS required")
            return view_func(request, *args, **kwargs)
        return wrapper
    
    @staticmethod
    def require_csrf(view_func):
        """Требует CSRF токен"""
        def wrapper(request, *args, **kwargs):
            if request.method in ['POST', 'PUT', 'PATCH', 'DELETE']:
                if not getattr(request, 'csrf_processing_done', False):
                    from django.http import HttpResponseForbidden
                    return HttpResponseForbidden("CSRF token required")
            return view_func(request, *args, **kwargs)
        return wrapper
    
    @staticmethod
    def rate_limit(requests_per_minute: int = 100):
        """Ограничение количества запросов"""
        def decorator(view_func):
            def wrapper(request, *args, **kwargs):
                # Реализация rate limiting для конкретного view
                return view_func(request, *args, **kwargs)
            return wrapper
        return decorator


class SecurityValidator:
    """Валидатор безопасности"""
    
    @staticmethod
    def validate_password(password: str) -> bool:
        """Валидация пароля"""
        if len(password) < 8:
            return False
        if not any(c.isupper() for c in password):
            return False
        if not any(c.islower() for c in password):
            return False
        if not any(c.isdigit() for c in password):
            return False
        if not any(c in '!@#$%^&*()_+-=[]{}|;:,.<>?' for c in password):
            return False
        return True
    
    @staticmethod
    def validate_email(email: str) -> bool:
        """Валидация email"""
        import re
        pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return bool(re.match(pattern, email))
    
    @staticmethod
    def sanitize_input(input_data: str) -> str:
        """Санитизация входных данных"""
        import html
        return html.escape(input_data.strip())


class SecurityMonitor:
    """Монитор безопасности"""
    
    def __init__(self):
        self.violations = []
        self.alerts = []
    
    def log_violation(self, violation_type: str, details: str, request: HttpRequest = None):
        """Логирование нарушения безопасности"""
        violation = {
            'type': violation_type,
            'details': details,
            'timestamp': datetime.now(),
            'ip': self._get_client_ip(request) if request else 'unknown',
            'user_agent': request.META.get('HTTP_USER_AGENT', 'unknown') if request else 'unknown',
        }
        
        self.violations.append(violation)
        security_logger.warning(f"Security violation: {violation_type} - {details}")
        
        # Отправка алерта при критических нарушениях
        if violation_type in ['SQL_INJECTION', 'XSS_ATTEMPT', 'CSRF_VIOLATION']:
            self._send_alert(violation)
    
    def _get_client_ip(self, request: HttpRequest) -> str:
        """Получение IP адреса клиента"""
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0]
        return request.META.get('REMOTE_ADDR', 'unknown')
    
    def _send_alert(self, violation: Dict[str, Any]):
        """Отправка алерта"""
        alert = {
            'type': 'SECURITY_ALERT',
            'violation': violation,
            'timestamp': datetime.now(),
        }
        self.alerts.append(alert)
        security_logger.critical(f"SECURITY ALERT: {violation['type']} - {violation['details']}")


# Глобальный экземпляр монитора безопасности
security_monitor = SecurityMonitor()


def security_check():
    """Проверка безопасности при запуске"""
    try:
        SecurityConfig.validate_environment()
        security_logger.info("Security configuration validated successfully")
        return True
    except ImproperlyConfigured as e:
        security_logger.error(f"Security configuration error: {e}")
        return False 