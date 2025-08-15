# Настройка медиа файлов для Django

## Проблема

При добавлении новостей с изображениями, фотографии не загружались из-за неправильной настройки обработки медиа файлов.

## Решение

### 1. Обновлены сериализаторы

В файле `spbu_site/events/serializers.py` добавлено поле `image_url` для правильной обработки изображений:

```python
class NewsSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        if obj.image and hasattr(obj.image, 'url'):
            request = self.context.get('request')
            if request is not None:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None
```

### 2. Обновлены views

В файле `spbu_site/events/views.py` добавлена передача контекста request:

```python
def get_serializer_context(self):
    context = super().get_serializer_context()
    context['request'] = self.request
    return context
```

### 3. Настройки Django

В файле `spbu_site/spbu_site/settings.py` добавлены настройки для медиа файлов:

```python
# Media files configuration
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'

# Static files configuration
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
```

### 4. URL конфигурация

В файле `spbu_site/spbu_site/urls.py` добавлена обработка медиа файлов:

```python
from django.conf import settings
from django.conf.urls.static import static

# Добавляем обработку медиа файлов в режиме разработки
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
```

### 5. Созданы директории

Созданы необходимые директории для хранения файлов:

- `media/news/` - для изображений новостей
- `media/events/` - для изображений событий
- `static/` - для статических файлов

## Результат

Теперь при добавлении новостей с изображениями:

1. ✅ Изображения корректно сохраняются в папку `media/news/`
2. ✅ API возвращает полные URL для изображений
3. ✅ Фронтенд может отображать изображения
4. ✅ Слайдер новостей работает с изображениями

## Проверка

1. Добавьте новость с изображением через админ-панель Django
2. Проверьте, что изображение сохранилось в `media/news/`
3. Убедитесь, что API возвращает поле `image_url` с полным URL
4. Проверьте отображение в слайдере новостей на главной странице
