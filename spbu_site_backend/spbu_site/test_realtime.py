#!/usr/bin/env python
"""
Тестирование работы в реальном времени
"""
import requests
import time
import json

def test_realtime_maintenance():
    url = "http://localhost:8000/api/maintenance/status/"
    
    print("🔄 Тестирование работы в реальном времени")
    print("=" * 50)
    
    for i in range(10):  # Проверяем 10 раз
        try:
            response = requests.get(url)
            
            if response.status_code == 200:
                data = response.json()
                status = "🔧 АКТИВНЫ" if data.get('is_active') else "✅ НЕАКТИВНЫ"
                print(f"Проверка {i+1}: {status}")
                
                if data.get('is_active'):
                    remaining = data.get('remaining_time')
                    if remaining:
                        hours = remaining // 3600
                        minutes = (remaining % 3600) // 60
                        print(f"  ⏰ Осталось: {hours}ч {minutes}м")
                    else:
                        print(f"  ⏰ Время не установлено")
                else:
                    print(f"  📄 Сайт работает в обычном режиме")
            else:
                print(f"❌ Ошибка HTTP: {response.status_code}")
                
        except Exception as e:
            print(f"❌ Ошибка: {e}")
        
        time.sleep(5)  # Ждем 5 секунд между проверками
    
    print("=" * 50)
    print("✅ Тестирование завершено")

if __name__ == "__main__":
    test_realtime_maintenance()
