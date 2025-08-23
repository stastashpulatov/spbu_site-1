#!/usr/bin/env python
"""
Простой тест middleware для технических работ
"""
import os
import sys
import django

# Добавляем путь к проекту
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# Настройка Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spbu_site.settings')

try:
    django.setup()
    print("✅ Django успешно настроен")
    
    # Проверяем импорт middleware
    from site_maintenance.middleware import MaintenanceMiddleware
    print("✅ Middleware успешно импортирован")
    
    # Проверяем импорт модели
    from site_maintenance.models import MaintenanceMode
    print("✅ Модель успешно импортирована")
    
    # Проверяем количество записей
    count = MaintenanceMode.objects.count()
    print(f"✅ Количество записей в базе: {count}")
    
    # Проверяем активные тех. работы
    active = MaintenanceMode.objects.filter(is_active=True).first()
    if active:
        print(f"✅ АКТИВНЫЕ тех. работы найдены: {active.title}")
    else:
        print("❌ АКТИВНЫЕ тех. работы НЕ найдены")
    
    print("\n🎯 Middleware должен работать корректно!")
    
except Exception as e:
    print(f"❌ Ошибка: {e}")
    import traceback
    traceback.print_exc()
