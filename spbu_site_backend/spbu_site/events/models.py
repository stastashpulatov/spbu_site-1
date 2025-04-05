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
        verbose_name = 'News'
        verbose_name_plural = 'News'


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
