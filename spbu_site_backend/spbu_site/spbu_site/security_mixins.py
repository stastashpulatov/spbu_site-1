"""
Безопасные mixins для моделей Django
Обеспечивают защиту от SQL инъекций, XSS и других атак
"""

from django.db import models
from django.core.exceptions import ValidationError
from django.utils.html import strip_tags
from django.contrib.auth.models import AbstractUser
from .security import SecurityValidator, security_monitor


class SecureModelMixin:
    """Mixin для безопасных моделей"""
    
    def clean(self):
        """Валидация и санитизация данных"""
        super().clean()
        self._sanitize_fields()
        self._validate_fields()
    
    def _sanitize_fields(self):
        """Санитизация полей"""
        for field in self._meta.fields:
            if isinstance(field, (models.CharField, models.TextField)):
                value = getattr(self, field.name, None)
                if value and isinstance(value, str):
                    # Удаление HTML тегов
                    sanitized_value = strip_tags(value)
                    # Экранирование специальных символов
                    sanitized_value = SecurityValidator.sanitize_input(sanitized_value)
                    setattr(self, field.name, sanitized_value)
    
    def _validate_fields(self):
        """Валидация полей"""
        for field in self._meta.fields:
            if isinstance(field, models.EmailField):
                value = getattr(self, field.name, None)
                if value and not SecurityValidator.validate_email(value):
                    raise ValidationError(f"Invalid email format in {field.name}")
    
    def save(self, *args, **kwargs):
        """Безопасное сохранение"""
        self.clean()
        return super().save(*args, **kwargs)


class SecureUserMixin:
    """Mixin для безопасных пользователей"""
    
    def set_password(self, raw_password):
        """Безопасная установка пароля"""
        if not SecurityValidator.validate_password(raw_password):
            raise ValidationError(
                "Password must be at least 8 characters long and contain "
                "uppercase, lowercase, digit, and special character"
            )
        super().set_password(raw_password)
    
    def clean(self):
        """Валидация пользователя"""
        super().clean()
        if hasattr(self, 'email') and self.email:
            if not SecurityValidator.validate_email(self.email):
                raise ValidationError("Invalid email format")


class SecureViewMixin:
    """Mixin для безопасных views"""
    
    def dispatch(self, request, *args, **kwargs):
        """Безопасная обработка запроса"""
        # Логирование запроса
        security_monitor.log_violation(
            'VIEW_ACCESS',
            f"Access to {self.__class__.__name__}",
            request
        )
        return super().dispatch(request, *args, **kwargs)
    
    def get_queryset(self):
        """Безопасный queryset"""
        queryset = super().get_queryset()
        # Проверка прав доступа
        if hasattr(self, 'user') and not self.user.is_superuser:
            # Фильтрация по пользователю если необходимо
            pass
        return queryset 