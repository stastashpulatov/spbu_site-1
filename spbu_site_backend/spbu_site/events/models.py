from django.db import models

# Create your models here.
class News(models.Model):
    title = models.CharField('Заголовок', max_length=200)
    title_uz = models.CharField('Заголовок на узбекском', max_length=200)
    title_en = models.CharField('Заголовок на английском', max_length=200)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    description_en = models.TextField('Описание на английском')
    image = models.ImageField('Изображение', upload_to='news/', null=True, blank=True)
    publication_date = models.DateTimeField('Дата публикации', auto_now_add=True)
    is_visible = models.BooleanField('Видимость', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'


class Event(models.Model):
    title = models.CharField('Название', max_length=200)
    title_uz = models.CharField('Название на узбекском', max_length=200)
    title_en = models.CharField('Название на английском', max_length=200)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    description_en = models.TextField('Описание на английском')
    date = models.DateTimeField('Дата проведения')
    location = models.CharField('Место проведения', max_length=200)
    location_uz = models.CharField('Место проведения на узбекском', max_length=200)
    location_en = models.CharField('Место проведения на английском', max_length=200)
    image = models.ImageField('Изображение', upload_to='events/', null=True, blank=True)
    is_visible = models.BooleanField('Видимость', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'События'


class Announcement(models.Model):
    title = models.CharField('Заголовок', max_length=200)
    title_uz = models.CharField('Заголовок на узбекском', max_length=200)
    title_en = models.CharField('Заголовок на английском', max_length=200)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    description_en = models.TextField('Описание на английском')
    image = models.ImageField('Изображение', upload_to='announcements/', null=True, blank=True)
    publication_date = models.DateTimeField('Дата публикации', auto_now_add=True)
    is_visible = models.BooleanField('Видимость', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Объявление'
        verbose_name_plural = 'Объявления'


class GalleryImage(models.Model):
    """Изображение галереи.
    Может быть привязано к одной из сущностей (News/Event/Announcement) или быть самостоятельным.
    """
    title = models.CharField('Название', max_length=200, blank=True)
    caption = models.CharField('Подпись', max_length=255, blank=True)
    image = models.ImageField('Изображение', upload_to='gallery/')
    created_at = models.DateTimeField('Дата добавления', auto_now_add=True)
    is_visible = models.BooleanField('Видимость', default=True)

    news = models.ForeignKey(News, on_delete=models.CASCADE, null=True, blank=True, related_name='gallery_images', verbose_name='Новость')
    event = models.ForeignKey(Event, on_delete=models.CASCADE, null=True, blank=True, related_name='gallery_images', verbose_name='Событие')
    announcement = models.ForeignKey(Announcement, on_delete=models.CASCADE, null=True, blank=True, related_name='gallery_images', verbose_name='Объявление')

    def clean(self):
        # Разрешаем не более одной привязки одновременно
        links = [self.news, self.event, self.announcement]
        if sum(1 for x in links if x is not None) > 1:
            from django.core.exceptions import ValidationError
            raise ValidationError('Изображение может быть привязано только к одной сущности или ни к одной.')

    def __str__(self):
        return self.title or f"Image #{self.pk}" if self.pk else "Image"

    class Meta:
        verbose_name = 'Изображение галереи'
        verbose_name_plural = 'Галерея'
