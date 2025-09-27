from django.db import models

# Create your models here.
class Group(models.Model):
    name = models.CharField('Название группы', max_length=100, unique=True)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'

class Room(models.Model):
    name = models.CharField('Аудитория', max_length=100, unique=True)
    def __str__(self):
        return self.name
    class Meta:
        verbose_name = 'Аудитория'
        verbose_name_plural = 'Аудитории'

class Schedule(models.Model):
    DAYS_OF_WEEK = [
        ('monday', 'Понедельник'),
        ('tuesday', 'Вторник'),
        ('wednesday', 'Среда'),
        ('thursday', 'Четверг'),
        ('friday', 'Пятница'),
        ('saturday', 'Суббота'),
        ('sunday', 'Воскресенье'),
    ]
    
    title = models.CharField('Название предмета', max_length=200)
    title_uz = models.CharField('Название предмета на узбекском', max_length=200)
    title_en = models.CharField('Название предмета на английском', max_length=200)
    day_of_week = models.CharField('День недели', max_length=20, choices=DAYS_OF_WEEK)
    start_time = models.TimeField('Время начала')
    end_time = models.TimeField('Время окончания')
    location = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True, blank=True, verbose_name='Аудитория')

    group = models.ForeignKey(Group, on_delete=models.CASCADE, verbose_name='Группа')
    is_visible = models.BooleanField('Видимость', default=True)
    
    def __str__(self):
        return f"{self.title} ({self.day_of_week}, {self.start_time}-{self.end_time})"
    
    class Meta:
        verbose_name = 'Расписание'
        verbose_name_plural = 'Расписание'
        ordering = ['day_of_week', 'start_time']
