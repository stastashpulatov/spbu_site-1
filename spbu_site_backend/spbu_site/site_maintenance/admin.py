from django.contrib import admin
from django.utils.html import format_html
from django.utils import timezone
from .models import MaintenanceMode


@admin.register(MaintenanceMode)
class MaintenanceModeAdmin(admin.ModelAdmin):
    """Админка для управления режимом технических работ"""
    
    list_display = [
        'is_active', 
        'title', 
        'start_time', 
        'estimated_end_time', 
        'remaining_time_display',
        'status_display'
    ]
    
    list_filter = ['is_active', 'start_time', 'estimated_end_time']
    
    search_fields = ['title', 'message']
    
    readonly_fields = ['updated_at', 'remaining_time_display', 'auto_deactivation_warning']
    
    exclude = ['created_at']  # Исключаем поле created_at из формы
    
    fieldsets = (
        ('Основные настройки', {'fields': ('is_active', 'title', 'message')}),
        ('Временные рамки', {'fields': ('start_time', 'estimated_end_time')}),
        ('Автоматическое отключение', {'fields': ('auto_deactivation_warning',), 'classes': ('collapse',)}),
        ('Системная информация', {'fields': ('updated_at',), 'classes': ('collapse',)}),
    )
    
    actions = ['activate_maintenance', 'deactivate_maintenance']

    def auto_deactivation_warning(self, obj):
        if obj.is_active and obj.estimated_end_time:
            return format_html(
                '<div style="color: orange; font-weight: bold; padding: 10px; background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px;">'
                '⚠️ Внимание: Тех. работы автоматически отключатся в {}'
                '</div>',
                obj.estimated_end_time.strftime('%d.%m.%Y %H:%M')
            )
        return ""
    auto_deactivation_warning.short_description = "Автоматическое отключение"
    
    def remaining_time_display(self, obj):
        """Отображение оставшегося времени"""
        if obj.is_active and obj.estimated_end_time:
            remaining = obj.get_remaining_time()
            if remaining:
                hours = remaining.total_seconds() // 3600
                minutes = (remaining.total_seconds() % 3600) // 60
                if hours > 0:
                    return f"{int(hours)}ч {int(minutes)}м"
                else:
                    return f"{int(minutes)}м"
            else:
                return "Завершено"
        return "Не установлено"
    
    remaining_time_display.short_description = "Оставшееся время"
    
    def status_display(self, obj):
        """Отображение статуса работ"""
        if obj.is_active:
            if obj.is_expired():
                return format_html(
                    '<span style="color: red; font-weight: bold;">Время истекло</span>'
                )
            else:
                return format_html(
                    '<span style="color: green; font-weight: bold;">Активны</span>'
                )
        else:
            return format_html(
                '<span style="color: gray;">Неактивны</span>'
            )
    
    status_display.short_description = "Статус"
    
    def activate_maintenance(self, request, queryset):
        """Активировать режим технических работ"""
        # Деактивируем все существующие режимы
        MaintenanceMode.objects.all().update(is_active=False)
        # Активируем выбранный
        queryset.update(is_active=True)
        self.message_user(request, "Режим технических работ активирован")
    
    activate_maintenance.short_description = "Активировать режим тех. работ"
    
    def deactivate_maintenance(self, request, queryset):
        """Деактивировать режим технических работ"""
        queryset.update(is_active=False)
        self.message_user(request, "Режим технических работ деактивирован")
    
    deactivate_maintenance.short_description = "Деактивировать режим тех. работ"
    
    def save_model(self, request, obj, form, change):
        """Автоматически деактивировать другие режимы при активации нового"""
        if obj.is_active:
            # Деактивируем все другие режимы
            MaintenanceMode.objects.exclude(id=obj.id).update(is_active=False)
        super().save_model(request, obj, form, change)
