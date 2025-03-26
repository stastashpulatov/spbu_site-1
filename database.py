from django.db import models


class Faculty(models.Model):
    """Модель факультета"""
    name = models.CharField('Название', max_length=200)
    name_uz = models.CharField('Название на узбекском', max_length=200)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    image = models.ImageField('Изображение', upload_to='faculties/', null=True, blank=True)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Факультет'
        verbose_name_plural = 'Факультеты'


class Program(models.Model):
    """Модель образовательной программы"""
    DEGREE_CHOICES = [
        ('bachelor', 'Бакалавриат'),
        ('master', 'Магистратура'),
        ('phd', 'Аспирантура'),
    ]

    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='programs', verbose_name='Факультет')
    name = models.CharField('Название', max_length=200)
    name_uz = models.CharField('Название на узбекском', max_length=200)
    degree = models.CharField('Степень', max_length=20, choices=DEGREE_CHOICES)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    duration = models.PositiveSmallIntegerField('Длительность обучения (лет)')
    tuition_fee = models.DecimalField('Стоимость обучения', max_digits=10, decimal_places=2)
    admission_requirements = models.TextField('Требования для поступления')
    admission_requirements_uz = models.TextField('Требования для поступления на узбекском')
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    def __str__(self):
        return f"{self.get_degree_display()} - {self.name}"

    class Meta:
        verbose_name = 'Образовательная программа'
        verbose_name_plural = 'Образовательные программы'


class Teacher(models.Model):
    """Модель преподавателя"""
    faculty = models.ForeignKey(Faculty, on_delete=models.CASCADE, related_name='teachers', verbose_name='Факультет')
    first_name = models.CharField('Имя', max_length=100)
    last_name = models.CharField('Фамилия', max_length=100)
    position = models.CharField('Должность', max_length=200)
    position_uz = models.CharField('Должность на узбекском', max_length=200)
    bio = models.TextField('Биография')
    bio_uz = models.TextField('Биография на узбекском')
    photo = models.ImageField('Фото', upload_to='teachers/', null=True, blank=True)
    email = models.EmailField('Email')
    phone = models.CharField('Телефон', max_length=20, blank=True)
    created_at = models.DateTimeField('Дата создания', auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'


class News(models.Model):
    """Модель новостей"""
    title = models.CharField('Заголовок', max_length=200)
    title_uz = models.CharField('Заголовок на узбекском', max_length=200)
    content = models.TextField('Содержание')
    content_uz = models.TextField('Содержание на узбекском')
    image = models.ImageField('Изображение', upload_to='news/', null=True, blank=True)
    publication_date = models.DateTimeField('Дата публикации', auto_now_add=True)
    is_published = models.BooleanField('Опубликовано', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Новость'
        verbose_name_plural = 'Новости'
        ordering = ['-publication_date']


class Event(models.Model):
    """Модель мероприятий"""
    title = models.CharField('Название', max_length=200)
    title_uz = models.CharField('Название на узбекском', max_length=200)
    description = models.TextField('Описание')
    description_uz = models.TextField('Описание на узбекском')
    date = models.DateTimeField('Дата проведения')
    location = models.CharField('Место проведения', max_length=200)
    location_uz = models.CharField('Место проведения на узбекском', max_length=200)
    image = models.ImageField('Изображение', upload_to='events/', null=True, blank=True)
    is_active = models.BooleanField('Активно', default=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'
        ordering = ['date']


class Contact(models.Model):
    """Модель контактной информации"""
    address = models.TextField('Адрес')
    address_uz = models.TextField('Адрес на узбекском')
    phone = models.CharField('Телефон', max_length=20)
    email = models.EmailField('Email')
    working_hours = models.CharField('Часы работы', max_length=200)
    working_hours_uz = models.CharField('Часы работы на узбекском', max_length=200)
    map_coordinates = models.CharField('Координаты на карте', max_length=100)

    def __str__(self):
        return self.address

    class Meta:
        verbose_name = 'Контактная информация'
        verbose_name_plural = 'Контактная информация'
