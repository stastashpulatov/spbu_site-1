#!/usr/bin/env python
"""
Проверка базы данных технических работ
"""
import os
import django

# Настройка Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spbu_site.settings')
django.setup()

from site_maintenance.models import MaintenanceMode

print("=== Проверка базы данных технических работ ===")

# Проверяем все записи
all_records = MaintenanceMode.objects.all()
print(f"Всего записей: {all_records.count()}")

for record in all_records:
    print(f"\nЗапись ID {record.id}:")
    print(f"  Активна: {record.is_active}")
    print(f"  Заголовок: {record.title}")
    print(f"  Сообщение: {record.message[:50]}...")
    print(f"  Начало: {record.start_time}")
    print(f"  Завершение: {record.estimated_end_time}")
    print(f"  Создана: {record.created_at}")

# Проверяем активные тех. работы
active = MaintenanceMode.objects.filter(is_active=True).first()
if active:
    print(f"\n✅ АКТИВНЫЕ тех. работы: {active.title}")
else:
    print(f"\n❌ АКТИВНЫЕ тех. работы НЕ найдены")

# Проверяем, что происходит при обращении к API
print(f"\n=== Тестирование API ===")
try:
    from site_maintenance.views import MaintenanceStatusView
    from rest_framework.test import APIRequestFactory
    
    factory = APIRequestFactory()
    request = factory.get('/api/maintenance/status/')
    view = MaintenanceStatusView.as_view()
    response = view(request)
    
    print(f"Статус ответа API: {response.status_code}")
    print(f"Заголовки ответа:")
    for key, value in response.items():
        print(f"  {key}: {value}")
    print(f"Данные ответа: {response.data}")
    
except Exception as e:
    print(f"Ошибка при тестировании API: {e}")

print("\n=== Конец проверки ===")
