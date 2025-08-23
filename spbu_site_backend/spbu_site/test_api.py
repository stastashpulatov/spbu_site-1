#!/usr/bin/env python
"""
Тестирование API технических работ
"""
import requests
import json

def test_maintenance_api():
    url = "http://localhost:8000/api/maintenance/status/"
    
    print(f"Тестирую API: {url}")
    
    try:
        response = requests.get(url)
        
        print(f"Статус ответа: {response.status_code}")
        print(f"Заголовки ответа:")
        for key, value in response.headers.items():
            print(f"  {key}: {value}")
        
        print(f"\nТело ответа:")
        print(f"Первые 500 символов: {response.text[:500]}")
        
        if response.status_code == 200:
            try:
                data = response.json()
                print(f"\nJSON данные:")
                print(json.dumps(data, indent=2, ensure_ascii=False))
            except json.JSONDecodeError as e:
                print(f"Ошибка парсинга JSON: {e}")
        else:
            print(f"Ошибка HTTP: {response.status_code}")
            
    except requests.exceptions.ConnectionError:
        print("❌ Ошибка подключения! Django сервер не запущен на порту 8000")
        print("Запустите: python manage.py runserver")
    except Exception as e:
        print(f"❌ Ошибка: {e}")

if __name__ == "__main__":
    test_maintenance_api()
