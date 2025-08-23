from django.db import models
from django.utils import timezone


class MaintenanceMode(models.Model):
    """Модель для управления режимом технических работ"""
    
    is_active = models.BooleanField(
        default=False,
        verbose_name="Активен режим тех. работ"
    )
    
    title = models.CharField(
        max_length=200,
        verbose_name="Заголовок страницы тех. работ",
        default="Технические работы"
    )
    
    message = models.TextField(
        verbose_name="Сообщение для пользователей",
        default="В настоящее время проводятся технические работы. Приносим извинения за неудобства."
    )
    
    start_time = models.DateTimeField(
        verbose_name="Время начала работ",
        default=timezone.now
    )
    
    estimated_end_time = models.DateTimeField(
        verbose_name="Ожидаемое время завершения",
        null=True,
        blank=True
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Дата создания"
    )
    
    updated_at = models.DateTimeField(
        auto_now=True,
        verbose_name="Дата обновления"
    )
    
    class Meta:
        verbose_name = "Режим технических работ"
        verbose_name_plural = "Режимы технических работ"
        ordering = ['-created_at']
    
    def __str__(self):
        return f"Тех. работы: {'Активны' if self.is_active else 'Неактивны'}"
    
    def get_remaining_time(self):
        """Получить оставшееся время до завершения работ"""
        if self.estimated_end_time and self.is_active:
            now = timezone.now()
            if now < self.estimated_end_time:
                return self.estimated_end_time - now
        return None
    
    def is_expired(self):
        """Проверить, истекло ли время работ"""
        if self.estimated_end_time and self.is_active:
            return timezone.now() >= self.estimated_end_time
        return False

    def auto_deactivate_if_expired(self):
        """Автоматически деактивирует тех. работы, если время истекло"""
        if self.is_expired():
            self.is_active = False
            self.save()
            return True
        return False
