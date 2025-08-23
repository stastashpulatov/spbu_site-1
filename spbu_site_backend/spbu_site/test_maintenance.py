#!/usr/bin/env python
"""
Тестовый скрипт для проверки системы технических работ
"""
import os
import django

# Настройка Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spbu_site.settings')
django.setup()

from site_maintenance.models import MaintenanceMode
from django.utils import timezone

def test_maintenance():
    print("=== Тест системы технических работ ===")
    
    # Проверяем все записи
    all_maintenance = MaintenanceMode.objects.all()
    print(f"Всего записей тех. работ: {all_maintenance.count()}")
    
    for item in all_maintenance:
        print(f"\nЗапись ID {item.id}:")
        print(f"  Активна: {item.is_active}")
        print(f"  Заголовок: {item.title}")
        print(f"  Начало: {item.start_time}")
        print(f"  Ожидаемое завершение: {item.estimated_end_time}")
        print(f"  Создана: {item.created_at}")
        print(f"  Обновлена: {item.updated_at}")
    
    # Проверяем активные тех. работы
    active_maintenance = MaintenanceMode.objects.filter(is_active=True).first()
    if active_maintenance:
        print(f"\n✅ АКТИВНЫЕ тех. работы найдены!")
        print(f"  Заголовок: {active_maintenance.title}")
        print(f"  Сообщение: {active_maintenance.message}")
        
        # Проверяем время
        now = timezone.now()
        if active_maintenance.estimated_end_time:
            remaining = active_maintenance.get_remaining_time()
            if remaining:
                print(f"  Оставшееся время: {remaining}")
            else:
                print(f"  Время истекло")
        else:
            print(f"  Время завершения не установлено")
    else:
        print(f"\n❌ АКТИВНЫЕ тех. работы НЕ найдены!")
    
    # Проверяем модель
    print(f"\n=== Проверка модели ===")
    try:
        # Пробуем создать тестовую запись
        test_maintenance = MaintenanceMode(
            title="Тест",
            message="Тестовое сообщение",
            is_active=False
        )
        test_maintenance.save()
        print("✅ Модель работает корректно")
        test_maintenance.delete()
        print("✅ Тестовая запись удалена")
    except Exception as e:
        print(f"❌ Ошибка с моделью: {e}")

if __name__ == "__main__":
    test_maintenance()
