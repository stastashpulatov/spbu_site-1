#!/usr/bin/env python3
"""
Дополнительные тесты безопасности для SPBU Site
Проверяет защиту от специфических атак
"""

import os
import sys
import json
import requests
import subprocess
from pathlib import Path
from datetime import datetime

# Добавляем путь к проекту
project_root = Path(__file__).parent
sys.path.append(str(project_root / 'spbu_site' / 'spbu_site'))


class AdvancedSecurityTester:
    """Класс для дополнительного тестирования безопасности"""
    
    def __init__(self, base_url="http://localhost:8000"):
        self.base_url = base_url
        self.results = {
            'timestamp': datetime.now().isoformat(),
            'tests': {},
            'overall_status': 'PENDING'
        }
        self.session = requests.Session()
    
    def test_ldap_injection(self):
        """Тест защиты от LDAP инъекций"""
        print("🔍 Тестирование защиты от LDAP инъекций...")
        
        ldap_payloads = [
            "*)(uid=*))(|(uid=*",
            "*)(|(password=*))",
            "*)(|(objectclass=*))",
            "*)(|(cn=*))",
            "*)(|(mail=*))",
            "*)(|(sn=*))",
            "*)(|(givenName=*))",
            "*)(|(memberOf=*))",
            "*)(|(userPassword=*))",
            "*)(|(description=*))",
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/login/',
            '/api/users/search/',
            '/api/ldap/',
            '/admin/users/',
        ]
        
        for endpoint in test_endpoints:
            for payload in ldap_payloads:
                try:
                    response = self.session.post(
                        f"{self.base_url}{endpoint}",
                        data={'username': payload, 'password': payload},
                        timeout=5
                    )
                    
                    if self._detect_ldap_injection_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['ldap_injection'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены LDAP инъекции: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['ldap_injection'] = {'status': 'SECURE'}
            print("✅ Защита от LDAP инъекций работает")
    
    def _detect_ldap_injection_response(self, response):
        """Определение признаков LDAP инъекции"""
        ldap_indicators = [
            'ldap error',
            'ldap_search',
            'ldap_bind',
            'ldap_connect',
            'ldap_result',
            'ldap_get_entries',
            'ldap_get_dn',
            'ldap_get_values',
            'ldap_count_entries',
            'ldap_err2string',
        ]
        
        response_text = response.text.lower()
        return any(indicator in response_text for indicator in ldap_indicators)
    
    def test_no_sql_injection(self):
        """Тест защиты от NoSQL инъекций"""
        print("🔍 Тестирование защиты от NoSQL инъекций...")
        
        nosql_payloads = [
            '{"$gt": ""}',
            '{"$ne": null}',
            '{"$where": "1==1"}',
            '{"$regex": ".*"}',
            '{"$exists": true}',
            '{"$in": ["admin", "user"]}',
            '{"$or": [{"username": "admin"}, {"username": "user"}]}',
            '{"$and": [{"username": "admin"}, {"password": "test"}]}',
            '{"$not": {"username": "admin"}}',
            '{"$nor": [{"username": "admin"}, {"username": "user"}]}',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/login/',
            '/api/users/',
            '/api/search/',
            '/api/data/',
        ]
        
        for endpoint in test_endpoints:
            for payload in nosql_payloads:
                try:
                    response = self.session.post(
                        f"{self.base_url}{endpoint}",
                        json={'query': payload, 'filter': payload},
                        headers={'Content-Type': 'application/json'},
                        timeout=5
                    )
                    
                    if self._detect_nosql_injection_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['nosql_injection'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены NoSQL инъекции: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['nosql_injection'] = {'status': 'SECURE'}
            print("✅ Защита от NoSQL инъекций работает")
    
    def _detect_nosql_injection_response(self, response):
        """Определение признаков NoSQL инъекции"""
        nosql_indicators = [
            'mongodb error',
            'mongo error',
            'mongoose error',
            'couchdb error',
            'cassandra error',
            'redis error',
            'dynamodb error',
            'firebase error',
            'firestore error',
            'elasticsearch error',
        ]
        
        response_text = response.text.lower()
        return any(indicator in response_text for indicator in nosql_indicators)
    
    def test_command_injection(self):
        """Тест защиты от Command Injection"""
        print("🔍 Тестирование защиты от Command Injection...")
        
        command_payloads = [
            '; ls -la',
            '| whoami',
            '& dir',
            '&& cat /etc/passwd',
            '|| id',
            '`whoami`',
            '$(whoami)',
            '; ping -c 1 127.0.0.1',
            '| netstat -an',
            '& tasklist',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/system/',
            '/api/exec/',
            '/api/command/',
            '/admin/system/',
        ]
        
        for endpoint in test_endpoints:
            for payload in command_payloads:
                try:
                    response = self.session.post(
                        f"{self.base_url}{endpoint}",
                        data={'command': payload, 'input': payload},
                        timeout=5
                    )
                    
                    if self._detect_command_injection_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['command_injection'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены Command Injection: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['command_injection'] = {'status': 'SECURE'}
            print("✅ Защита от Command Injection работает")
    
    def _detect_command_injection_response(self, response):
        """Определение признаков Command Injection"""
        command_indicators = [
            'root:x:0:0:',
            'bin:x:1:1:',
            'daemon:x:2:2:',
            'total ',
            'drwx',
            '-rwx',
            'Directory of',
            'Volume Serial Number',
            'File(s)',
            'Dir(s)',
        ]
        
        response_text = response.text
        return any(indicator in response_text for indicator in command_indicators)
    
    def test_ssrf_attacks(self):
        """Тест защиты от SSRF атак"""
        print("🔍 Тестирование защиты от SSRF атак...")
        
        ssrf_payloads = [
            'http://127.0.0.1:22',
            'http://localhost:3306',
            'http://127.0.0.1:6379',
            'http://localhost:5432',
            'http://127.0.0.1:27017',
            'http://localhost:9200',
            'http://127.0.0.1:8080',
            'http://localhost:3000',
            'http://127.0.0.1:5000',
            'http://localhost:8000',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/fetch/',
            '/api/proxy/',
            '/api/url/',
            '/api/webhook/',
        ]
        
        for endpoint in test_endpoints:
            for payload in ssrf_payloads:
                try:
                    response = self.session.post(
                        f"{self.base_url}{endpoint}",
                        data={'url': payload, 'endpoint': payload},
                        timeout=5
                    )
                    
                    if self._detect_ssrf_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['ssrf'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены SSRF уязвимости: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['ssrf'] = {'status': 'SECURE'}
            print("✅ Защита от SSRF атак работает")
    
    def _detect_ssrf_response(self, response):
        """Определение признаков SSRF"""
        ssrf_indicators = [
            'ssh-2.0',
            'mysql_native_password',
            'redis_version',
            'postgresql',
            'mongodb',
            'elasticsearch',
            'apache',
            'nginx',
            'iis',
            'connection refused',
            'connection timeout',
        ]
        
        response_text = response.text.lower()
        return any(indicator in response_text for indicator in ssrf_indicators)
    
    def test_xml_external_entity(self):
        """Тест защиты от XXE атак"""
        print("🔍 Тестирование защиты от XXE атак...")
        
        xxe_payloads = [
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "file:///etc/passwd" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE data [<!ENTITY file SYSTEM "file:///etc/hostname">]><data>&file;</data>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE data [<!ENTITY file SYSTEM "file:///c:/windows/win.ini">]><data>&file;</data>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE data [<!ENTITY file SYSTEM "http://127.0.0.1:22">]><data>&file;</data>',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/xml/',
            '/api/parse/',
            '/api/upload/xml/',
            '/api/convert/',
        ]
        
        for endpoint in test_endpoints:
            for payload in xxe_payloads:
                try:
                    response = self.session.post(
                        f"{self.base_url}{endpoint}",
                        data=payload,
                        headers={'Content-Type': 'application/xml'},
                        timeout=5
                    )
                    
                    if self._detect_xxe_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - XXE payload")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['xxe'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены XXE уязвимости: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['xxe'] = {'status': 'SECURE'}
            print("✅ Защита от XXE атак работает")
    
    def _detect_xxe_response(self, response):
        """Определение признаков XXE"""
        xxe_indicators = [
            'root:x:0:0:',
            'bin:x:1:1:',
            'daemon:x:2:2:',
            '[fonts]',
            '[extensions]',
            'ssh-2.0',
            'connection refused',
        ]
        
        response_text = response.text
        return any(indicator in response_text for indicator in xxe_indicators)
    
    def run_all_tests(self):
        """Запуск всех дополнительных тестов"""
        print("🚀 Запуск дополнительных тестов безопасности...")
        print("=" * 60)
        
        tests = [
            self.test_ldap_injection,
            self.test_no_sql_injection,
            self.test_command_injection,
            self.test_ssrf_attacks,
            self.test_xml_external_entity,
        ]
        
        for test in tests:
            try:
                test()
            except Exception as e:
                print(f"❌ Критическая ошибка в тесте {test.__name__}: {e}")
        
        # Определяем общий статус
        vulnerable_tests = sum(
            1 for test_result in self.results['tests'].values()
            if test_result.get('status') == 'VULNERABLE'
        )
        
        if vulnerable_tests == 0:
            self.results['overall_status'] = 'SECURE'
        else:
            self.results['overall_status'] = 'VULNERABLE'
        
        self._generate_report()
    
    def _generate_report(self):
        """Генерация отчета"""
        print("\n" + "=" * 60)
        print("ОТЧЕТ О ДОПОЛНИТЕЛЬНЫХ ТЕСТАХ БЕЗОПАСНОСТИ")
        print("=" * 60)
        
        for test_name, test_result in self.results['tests'].items():
            status = test_result.get('status', 'UNKNOWN')
            if status == 'SECURE':
                print(f"✅ {test_name}: БЕЗОПАСНО")
            elif status == 'VULNERABLE':
                print(f"❌ {test_name}: УЯЗВИМО")
            else:
                print(f"⚠️  {test_name}: ОШИБКА")
        
        print(f"\nОбщий статус: {self.results['overall_status']}")
        
        # Сохраняем отчет
        report_path = project_root / 'advanced_security_report.json'
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
        
        print(f"📄 Отчет сохранен в: {report_path}")


def main():
    """Главная функция"""
    tester = AdvancedSecurityTester()
    tester.run_all_tests()
    
    if tester.results['overall_status'] == 'SECURE':
        print("\n✅ Дополнительные тесты завершены успешно!")
        sys.exit(0)
    else:
        print("\n⚠️  Дополнительные тесты выявили уязвимости!")
        sys.exit(1)


if __name__ == "__main__":
    main() 