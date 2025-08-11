"""
Безопасные сериализаторы для API
Обеспечивают валидацию и санитизацию данных
"""

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .security import SecurityValidator, security_monitor


class SecureTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Безопасный сериализатор для получения токенов"""
    
    def validate(self, attrs):
        """Валидация данных для получения токена"""
        # Логирование попытки входа
        security_monitor.log_violation(
            'LOGIN_ATTEMPT',
            f"Login attempt for user: {attrs.get('username', 'unknown')}",
            self.context.get('request')
        )
        
        # Валидация данных
        username = attrs.get('username', '').strip()
        password = attrs.get('password', '')
        
        if not username or not password:
            raise serializers.ValidationError("Username and password are required")
        
        # Санитизация username
        username = SecurityValidator.sanitize_input(username)
        
        # Проверка на подозрительную активность
        if self._is_suspicious_activity(username):
            security_monitor.log_violation(
                'SUSPICIOUS_LOGIN',
                f"Suspicious login attempt for user: {username}",
                self.context.get('request')
            )
            raise serializers.ValidationError("Suspicious activity detected")
        
        # Вызов родительского метода
        data = super().validate(attrs)
        
        # Логирование успешного входа
        security_monitor.log_violation(
            'LOGIN_SUCCESS',
            f"Successful login for user: {self.user.username}",
            self.context.get('request')
        )
        
        return data
    
    def _is_suspicious_activity(self, username: str) -> bool:
        """Проверка на подозрительную активность"""
        # Проверка на SQL инъекции
        sql_keywords = ['SELECT', 'INSERT', 'UPDATE', 'DELETE', 'DROP', 'UNION']
        if any(keyword.lower() in username.lower() for keyword in sql_keywords):
            return True
        
        # Проверка на XSS попытки
        xss_patterns = ['<script>', 'javascript:', 'onerror=', 'onload=']
        if any(pattern in username.lower() for pattern in xss_patterns):
            return True
        
        return False


class SecureModelSerializer(serializers.ModelSerializer):
    """Базовый безопасный сериализатор для моделей"""
    
    def validate(self, attrs):
        """Валидация и санитизация данных"""
        # Санитизация строковых полей
        for field_name, value in attrs.items():
            if isinstance(value, str):
                attrs[field_name] = SecurityValidator.sanitize_input(value)
        
        return super().validate(attrs)
    
    def create(self, validated_data):
        """Безопасное создание объекта"""
        # Логирование создания
        security_monitor.log_violation(
            'OBJECT_CREATE',
            f"Creating {self.Meta.model.__name__}",
            self.context.get('request')
        )
        
        return super().create(validated_data)
    
    def update(self, instance, validated_data):
        """Безопасное обновление объекта"""
        # Логирование обновления
        security_monitor.log_violation(
            'OBJECT_UPDATE',
            f"Updating {self.Meta.model.__name__} (id: {instance.id})",
            self.context.get('request')
        )
        
        return super().update(instance, validated_data)


class SecureUserSerializer(SecureModelSerializer):
    """Безопасный сериализатор для пользователей"""
    
    class Meta:
        model = None  # Будет установлено в наследниках
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']
    
    def validate_email(self, value):
        """Валидация email"""
        if value and not SecurityValidator.validate_email(value):
            raise serializers.ValidationError("Invalid email format")
        return value
    
    def validate_username(self, value):
        """Валидация username"""
        # Проверка на подозрительные символы
        suspicious_chars = ['<', '>', '"', "'", '&', ';', '(', ')']
        if any(char in value for char in suspicious_chars):
            raise serializers.ValidationError("Username contains invalid characters")
        
        return SecurityValidator.sanitize_input(value)
    
    def validate_password(self, value):
        """Валидация пароля"""
        if value and not SecurityValidator.validate_password(value):
            raise serializers.ValidationError(
                "Password must be at least 8 characters long and contain "
                "uppercase, lowercase, digit, and special character"
            )
        return value


class SecureFileUploadSerializer(serializers.Serializer):
    """Безопасный сериализатор для загрузки файлов"""
    
    file = serializers.FileField()
    
    def validate_file(self, value):
        """Валидация файла"""
        # Проверка размера файла (максимум 10MB)
        if value.size > 10 * 1024 * 1024:
            raise serializers.ValidationError("File size must be less than 10MB")
        
        # Проверка типа файла
        allowed_types = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'image/jpeg',
            'image/png',
            'image/gif',
        ]
        
        if value.content_type not in allowed_types:
            raise serializers.ValidationError("File type not allowed")
        
        # Проверка имени файла
        filename = value.name.lower()
        if any(ext in filename for ext in ['.exe', '.bat', '.cmd', '.com', '.pif']):
            raise serializers.ValidationError("Executable files are not allowed")
        
        return value 