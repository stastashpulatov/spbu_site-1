# Security Documentation

## Обзор системы безопасности

Данный проект реализует комплексную систему безопасности.

## Ключевые компоненты безопасности

### 1. Централизованная система безопасности (`security.py`)

- **SecurityConfig**: Критические настройки безопасности
- **SecurityMiddleware**: Middleware для обработки запросов
- **SecurityDecorator**: Декораторы для защиты views
- **SecurityValidator**: Валидация и санитизация данных
- **SecurityMonitor**: Мониторинг и логирование безопасности

### 2. Безопасные mixins (`security_mixins.py`)

- **SecureModelMixin**: Безопасные модели с автоматической санитизацией
- **SecureUserMixin**: Безопасные пользователи с валидацией паролей
- **SecureViewMixin**: Безопасные views с логированием

### 3. Безопасные сериализаторы (`secure_serializers.py`)

- **SecureTokenObtainPairSerializer**: Безопасное получение токенов
- **SecureModelSerializer**: Базовый безопасный сериализатор
- **SecureUserSerializer**: Безопасный сериализатор пользователей
- **SecureFileUploadSerializer**: Безопасная загрузка файлов

## Настройки безопасности

### Критические настройки (неизменяемые)

```python
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
```

### Content Security Policy

```python
CSP_DEFAULT_SRC = ("'self'",)
CSP_SCRIPT_SRC = ("'self'", "'unsafe-inline'", "'unsafe-eval'")
CSP_STYLE_SRC = ("'self'", "'unsafe-inline'")
CSP_IMG_SRC = ("'self'", "data:", "https:")
CSP_FONT_SRC = ("'self'", "https:")
CSP_CONNECT_SRC = ("'self'",)
CSP_FRAME_SRC = ("'none'",)
CSP_OBJECT_SRC = ("'none'",)
```

## Автоматические проверки

### Pre-commit hooks

Установка:

```bash
pip install pre-commit
pre-commit install
```

Проверки включают:

- Trailing whitespace
- End of file fixer
- YAML validation
- Large files check
- Merge conflicts check
- Security check
- Django deployment check

### Скрипт проверки безопасности

```bash
python security_check.py
```

Проверяет:

- Переменные окружения
- Настройки Django
- Зависимости на уязвимости
- Качество кода
- Права доступа к файлам
- Заголовки безопасности

## Рекомендации для разработчиков

### 1. Использование безопасных mixins

```python
from spbu_site.security_mixins import SecureModelMixin

class MyModel(SecureModelMixin, models.Model):
    # Автоматическая санитизация и валидация
    pass
```

### 2. Использование безопасных сериализаторов

```python
from spbu_site.secure_serializers import SecureModelSerializer

class MySerializer(SecureModelSerializer):
    class Meta:
        model = MyModel
        fields = '__all__'
```

### 3. Использование декораторов безопасности

```python
from spbu_site.security import SecurityDecorator

@SecurityDecorator.require_https
@SecurityDecorator.require_csrf
def my_view(request):
    # Защищенный view
    pass
```

### 4. Логирование безопасности

```python
from spbu_site.security import security_monitor

# Логирование события
security_monitor.log_violation(
    'CUSTOM_EVENT',
    'Description of the event',
    request
)
```

## Мониторинг безопасности

### Логи безопасности

Логи безопасности сохраняются в `logs/security.log` и включают:

- Попытки входа
- Нарушения безопасности
- Подозрительная активность
- Создание и обновление объектов

### Алерты

Критические нарушения автоматически генерируют алерты:

- SQL инъекции
- XSS попытки
- CSRF нарушения

## Переменные окружения

### Обязательные переменные

```bash
SECRET_KEY=your-secret-key-here
DEBUG=False
ALLOWED_HOSTS=your-domain.com,www.your-domain.com
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
```

### Рекомендуемые переменные

```bash
# Настройки базы данных
DB_NAME=spbu_site_db
DB_USER=postgres
DB_PASSWORD=secure-password
DB_HOST=localhost
DB_PORT=5432

# Настройки безопасности
SECURE_SSL_REDIRECT=True
SECURE_HSTS_SECONDS=31536000
```

## Обработка инцидентов

### 1. Обнаружение нарушения

- Проверьте логи безопасности: `logs/security.log`
- Проверьте алерты в консоли
- Анализируйте мониторинг безопасности

### 2. Ответные меры

- Блокировка подозрительных IP
- Сброс сессий пользователей
- Обновление токенов
- Анализ и исправление уязвимостей

### 3. Восстановление

- Резервное копирование данных
- Восстановление из резервной копии
- Обновление системы безопасности
- Тестирование восстановления

## Тестирование безопасности

### Автоматические тесты

```bash
# Запуск тестов безопасности
python manage.py test security

# Проверка настроек безопасности
python manage.py check --deploy
```

### Ручное тестирование

- Тестирование XSS защиты
- Тестирование CSRF защиты
- Тестирование SQL инъекций
- Тестирование аутентификации

## Обновления безопасности

### Регулярные обновления

1. **Зависимости**: Еженедельно проверяйте уязвимости
2. **Django**: Обновляйте при выходе новых версий
3. **Система безопасности**: Регулярно обновляйте правила

### Процесс обновления

1. Создайте резервную копию
2. Обновите зависимости
3. Запустите тесты безопасности
4. Проверьте функциональность
5. Разверните обновления

## Контакты

При обнаружении уязвимостей безопасности:

1. Немедленно сообщите команде разработки
2. Не публикуйте информацию публично
3. Предоставьте детальное описание уязвимости
4. Следуйте процессу ответных мер
