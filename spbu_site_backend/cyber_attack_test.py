#!/usr/bin/env python3
"""
Комплексный тест защиты от кибератак для SPBU Site
Проверяет защиту от всех основных типов атак
"""

import os
import sys
import json
import requests
import subprocess
import tempfile
from pathlib import Path
from datetime import datetime
from urllib.parse import urljoin, quote

# Добавляем путь к проекту
project_root = Path(__file__).parent
sys.path.append(str(project_root / 'spbu_site' / 'spbu_site'))


class CyberAttackTester:
    """Класс для тестирования защиты от кибератак"""
    
    def __init__(self, base_url="http://localhost:8000"):
        self.base_url = base_url
        self.results = {
            'timestamp': datetime.now().isoformat(),
            'tests': {},
            'overall_status': 'PENDING'
        }
        self.session = requests.Session()
    
    def test_sql_injection(self):
        """Тест защиты от SQL инъекций"""
        print("🔍 Тестирование защиты от SQL инъекций...")
        
        sql_payloads = [
            "' OR 1=1--",
            "'; DROP TABLE users;--",
            "' UNION SELECT * FROM users--",
            "admin' OR '1'='1",
            "1' AND 1=1--",
            "1' AND 1=2--",
            "' OR 'x'='x",
            "'; EXEC xp_cmdshell('dir');--",
            "' OR 1=1#",
            "' OR 1=1/*",
        ]
        
        vulnerable_endpoints = []
        
        # Тестируем различные эндпоинты
        test_endpoints = [
            '/api/login/',
            '/api/users/',
            '/api/news/',
            '/admin/login/',
            '/search/',
        ]
        
        for endpoint in test_endpoints:
            for payload in sql_payloads:
                try:
                    # Тест GET запроса
                    response = self.session.get(
                        urljoin(self.base_url, endpoint),
                        params={'q': payload, 'id': payload, 'username': payload},
                        timeout=5
                    )
                    
                    # Проверяем признаки SQL инъекции
                    if self._detect_sql_injection_response(response):
                        vulnerable_endpoints.append(f"GET {endpoint} - {payload}")
                    
                    # Тест POST запроса
                    response = self.session.post(
                        urljoin(self.base_url, endpoint),
                        data={'username': payload, 'password': payload, 'query': payload},
                        timeout=5
                    )
                    
                    if self._detect_sql_injection_response(response):
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['sql_injection'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены уязвимости SQL инъекции: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['sql_injection'] = {'status': 'SECURE'}
            print("✅ Защита от SQL инъекций работает")
    
    def _detect_sql_injection_response(self, response):
        """Определение признаков SQL инъекции в ответе"""
        sql_indicators = [
            'sql syntax',
            'mysql_fetch_array',
            'mysql_fetch_object',
            'mysql_num_rows',
            'mysql_fetch_assoc',
            'mysql_fetch_row',
            'mysql_fetch_field',
            'mysql error',
            'sql error',
            'oracle error',
            'postgresql error',
            'sqlite error',
            'database error',
            'syntax error',
            'unclosed quotation mark',
            'quoted string not properly terminated',
        ]
        
        response_text = response.text.lower()
        return any(indicator in response_text for indicator in sql_indicators)
    
    def test_xss_attacks(self):
        """Тест защиты от XSS атак"""
        print("🔍 Тестирование защиты от XSS атак...")
        
        xss_payloads = [
            '<script>alert("XSS")</script>',
            '<img src="x" onerror="alert(1)">',
            '<svg onload="alert(1)">',
            'javascript:alert("XSS")',
            '<iframe src="javascript:alert(1)">',
            '"><script>alert("XSS")</script>',
            '"><img src="x" onerror="alert(1)">',
            '";alert("XSS");//',
            '"><script>alert(String.fromCharCode(88,83,83))</script>',
            '<script>eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))</script>',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/news/',
            '/api/comments/',
            '/search/',
            '/contact/',
            '/feedback/',
        ]
        
        for endpoint in test_endpoints:
            for payload in xss_payloads:
                try:
                    # Тест GET запроса
                    response = self.session.get(
                        urljoin(self.base_url, endpoint),
                        params={'q': payload, 'comment': payload, 'message': payload},
                        timeout=5
                    )
                    
                    if payload in response.text:
                        vulnerable_endpoints.append(f"GET {endpoint} - {payload}")
                    
                    # Тест POST запроса
                    response = self.session.post(
                        urljoin(self.base_url, endpoint),
                        data={'comment': payload, 'message': payload, 'content': payload},
                        timeout=5
                    )
                    
                    if payload in response.text:
                        vulnerable_endpoints.append(f"POST {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['xss'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены XSS уязвимости: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['xss'] = {'status': 'SECURE'}
            print("✅ Защита от XSS атак работает")
    
    def test_csrf_attacks(self):
        """Тест защиты от CSRF атак"""
        print("🔍 Тестирование защиты от CSRF атак...")
        
        csrf_vulnerabilities = []
        
        # Тестируем эндпоинты, которые должны быть защищены от CSRF
        csrf_protected_endpoints = [
            '/api/users/create/',
            '/api/news/create/',
            '/api/comments/create/',
            '/admin/users/add/',
            '/api/delete/',
        ]
        
        for endpoint in csrf_protected_endpoints:
            try:
                # Пытаемся выполнить POST запрос без CSRF токена
                response = self.session.post(
                    urljoin(self.base_url, endpoint),
                    data={'test': 'data'},
                    timeout=5
                )
                
                # Если запрос прошел успешно без CSRF токена - это уязвимость
                if response.status_code == 200:
                    csrf_vulnerabilities.append(f"POST {endpoint} - отсутствует CSRF защита")
                elif response.status_code == 403:
                    # Проверяем, что это именно CSRF ошибка
                    if 'csrf' in response.text.lower() or 'forbidden' in response.text.lower():
                        pass  # Это хорошо - CSRF защита работает
                    else:
                        csrf_vulnerabilities.append(f"POST {endpoint} - неожиданная ошибка 403")
                        
            except Exception as e:
                print(f"⚠️  Ошибка при тестировании CSRF {endpoint}: {e}")
        
        if csrf_vulnerabilities:
            self.results['tests']['csrf'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': csrf_vulnerabilities
            }
            print(f"❌ Обнаружены CSRF уязвимости: {len(csrf_vulnerabilities)}")
        else:
            self.results['tests']['csrf'] = {'status': 'SECURE'}
            print("✅ Защита от CSRF атак работает")
    
    def test_path_traversal(self):
        """Тест защиты от Path Traversal атак"""
        print("🔍 Тестирование защиты от Path Traversal...")
        
        path_traversal_payloads = [
            '../../../etc/passwd',
            '..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '....//....//....//etc/passwd',
            '..%2F..%2F..%2Fetc%2Fpasswd',
            '%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd',
            '..%252F..%252F..%252Fetc%252Fpasswd',
            '..%c0%af..%c0%af..%c0%afetc%c0%afpasswd',
            '..%255c..%255c..%255cwindows%255csystem32%255cdrivers%255cetc%255chosts',
        ]
        
        vulnerable_endpoints = []
        
        test_endpoints = [
            '/api/files/',
            '/download/',
            '/static/',
            '/media/',
            '/uploads/',
        ]
        
        for endpoint in test_endpoints:
            for payload in path_traversal_payloads:
                try:
                    response = self.session.get(
                        urljoin(self.base_url, f"{endpoint}{payload}"),
                        timeout=5
                    )
                    
                    # Проверяем, не получили ли мы содержимое системных файлов
                    if self._detect_system_file_content(response):
                        vulnerable_endpoints.append(f"GET {endpoint} - {payload}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['path_traversal'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены Path Traversal уязвимости: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['path_traversal'] = {'status': 'SECURE'}
            print("✅ Защита от Path Traversal работает")
    
    def _detect_system_file_content(self, response):
        """Определение содержимого системных файлов"""
        system_file_indicators = [
            'root:x:0:0:',
            'bin:x:1:1:',
            'daemon:x:2:2:',
            'sys:x:3:3:',
            'sync:x:4:65534:',
            'games:x:5:60:',
            'man:x:6:12:',
            'lp:x:7:7:',
            'mail:x:8:8:',
            'news:x:9:9:',
            'uucp:x:10:10:',
            'proxy:x:13:13:',
            'www-data:x:33:33:',
            'backup:x:34:34:',
            'list:x:38:38:',
            'irc:x:39:39:',
            'gnats:x:41:41:',
            'nobody:x:65534:65534:',
            'system:',
            'administrator:',
            '127.0.0.1',
            'localhost',
            '::1',
        ]
        
        response_text = response.text
        return any(indicator in response_text for indicator in system_file_indicators)
    
    def test_file_upload_vulnerabilities(self):
        """Тест уязвимостей загрузки файлов"""
        print("🔍 Тестирование уязвимостей загрузки файлов...")
        
        malicious_files = [
            ('test.php', '<?php echo "PHP Code"; ?>', 'application/x-php'),
            ('test.jsp', '<% out.println("JSP Code"); %>', 'application/x-jsp'),
            ('test.asp', '<% Response.Write("ASP Code") %>', 'application/x-asp'),
            ('test.exe', b'MZ\x90\x00', 'application/x-executable'),
            ('test.bat', '@echo off\nnet user', 'application/x-bat'),
            ('test.sh', '#!/bin/bash\necho "Shell script"', 'application/x-sh'),
        ]
        
        vulnerable_endpoints = []
        
        upload_endpoints = [
            '/api/upload/',
            '/upload/',
            '/api/files/upload/',
            '/media/upload/',
        ]
        
        for endpoint in upload_endpoints:
            for filename, content, content_type in malicious_files:
                try:
                    files = {'file': (filename, content, content_type)}
                    response = self.session.post(
                        urljoin(self.base_url, endpoint),
                        files=files,
                        timeout=10
                    )
                    
                    # Если файл загрузился успешно - это уязвимость
                    if response.status_code == 200 or response.status_code == 201:
                        vulnerable_endpoints.append(f"POST {endpoint} - {filename}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['file_upload'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены уязвимости загрузки файлов: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['file_upload'] = {'status': 'SECURE'}
            print("✅ Защита от уязвимостей загрузки файлов работает")
    
    def test_authentication_bypass(self):
        """Тест обхода аутентификации"""
        print("🔍 Тестирование обхода аутентификации...")
        
        bypass_techniques = [
            # Попытки обхода с пустыми учетными данными
            {'username': '', 'password': ''},
            {'username': 'admin', 'password': ''},
            {'username': '', 'password': 'admin'},
            
            # Попытки с SQL инъекциями
            {'username': "' OR 1=1--", 'password': 'anything'},
            {'username': "admin'--", 'password': 'anything'},
            {'username': "admin'/*", 'password': 'anything'},
            
            # Попытки с пустыми токенами
            {'Authorization': ''},
            {'Authorization': 'Bearer '},
            {'Authorization': 'Bearer null'},
            {'Authorization': 'Bearer undefined'},
            
            # Попытки с неверными токенами
            {'Authorization': 'Bearer invalid_token'},
            {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.Et9HFtf9R3GEMA0IICOfFMVXY7kkTX1wr4qCyhIf58U'},
        ]
        
        vulnerable_endpoints = []
        
        protected_endpoints = [
            '/api/admin/',
            '/api/users/',
            '/admin/',
            '/api/sensitive/',
        ]
        
        for endpoint in protected_endpoints:
            for bypass_data in bypass_techniques:
                try:
                    if 'Authorization' in bypass_data:
                        # Тест с заголовками авторизации
                        headers = bypass_data
                        response = self.session.get(
                            urljoin(self.base_url, endpoint),
                            headers=headers,
                            timeout=5
                        )
                    else:
                        # Тест с данными формы
                        response = self.session.post(
                            urljoin(self.base_url, endpoint),
                            data=bypass_data,
                            timeout=5
                        )
                    
                    # Если получили доступ к защищенному ресурсу - это уязвимость
                    if response.status_code == 200:
                        vulnerable_endpoints.append(f"{endpoint} - {bypass_data}")
                        
                except Exception as e:
                    print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if vulnerable_endpoints:
            self.results['tests']['auth_bypass'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': vulnerable_endpoints
            }
            print(f"❌ Обнаружены уязвимости обхода аутентификации: {len(vulnerable_endpoints)}")
        else:
            self.results['tests']['auth_bypass'] = {'status': 'SECURE'}
            print("✅ Защита от обхода аутентификации работает")
    
    def test_information_disclosure(self):
        """Тест утечки информации"""
        print("🔍 Тестирование утечки информации...")
        
        sensitive_endpoints = [
            '/.git/',
            '/.env',
            '/config.php',
            '/wp-config.php',
            '/config.json',
            '/database.yml',
            '/.htaccess',
            '/robots.txt',
            '/sitemap.xml',
            '/api/',
            '/admin/',
            '/debug/',
            '/error/',
            '/logs/',
            '/backup/',
            '/.svn/',
            '/.hg/',
            '/.bzr/',
        ]
        
        information_leaks = []
        
        for endpoint in sensitive_endpoints:
            try:
                response = self.session.get(
                    urljoin(self.base_url, endpoint),
                    timeout=5
                )
                
                # Проверяем, не раскрывается ли чувствительная информация
                if self._detect_sensitive_information(response):
                    information_leaks.append(f"GET {endpoint} - раскрытие информации")
                    
            except Exception as e:
                print(f"⚠️  Ошибка при тестировании {endpoint}: {e}")
        
        if information_leaks:
            self.results['tests']['information_disclosure'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': information_leaks
            }
            print(f"❌ Обнаружены утечки информации: {len(information_leaks)}")
        else:
            self.results['tests']['information_disclosure'] = {'status': 'SECURE'}
            print("✅ Защита от утечки информации работает")
    
    def _detect_sensitive_information(self, response):
        """Определение чувствительной информации в ответе"""
        sensitive_indicators = [
            'database_password',
            'secret_key',
            'api_key',
            'private_key',
            'password',
            'token',
            'credential',
            'connection_string',
            'database_url',
            'mysql://',
            'postgresql://',
            'sqlite://',
            'mongodb://',
            'redis://',
            'aws_access_key',
            'aws_secret_key',
            'google_api_key',
            'facebook_app_secret',
            'twitter_consumer_secret',
            'github_token',
        ]
        
        response_text = response.text.lower()
        return any(indicator in response_text for indicator in sensitive_indicators)
    
    def test_rate_limiting(self):
        """Тест ограничения скорости запросов"""
        print("🔍 Тестирование ограничения скорости запросов...")
        
        rate_limit_vulnerabilities = []
        
        # Тестируем эндпоинты, которые должны иметь rate limiting
        rate_limited_endpoints = [
            '/api/login/',
            '/api/register/',
            '/api/password/reset/',
            '/admin/login/',
        ]
        
        for endpoint in rate_limited_endpoints:
            try:
                # Отправляем множество запросов подряд
                responses = []
                for i in range(100):
                    response = self.session.post(
                        urljoin(self.base_url, endpoint),
                        data={'username': f'test{i}', 'password': 'test'},
                        timeout=5
                    )
                    responses.append(response)
                
                # Проверяем, не все ли запросы прошли успешно
                successful_requests = sum(1 for r in responses if r.status_code == 200)
                if successful_requests > 10:  # Допускаем небольшое количество успешных запросов
                    rate_limit_vulnerabilities.append(f"POST {endpoint} - отсутствует rate limiting")
                    
            except Exception as e:
                print(f"⚠️  Ошибка при тестировании rate limiting {endpoint}: {e}")
        
        if rate_limit_vulnerabilities:
            self.results['tests']['rate_limiting'] = {
                'status': 'VULNERABLE',
                'vulnerabilities': rate_limit_vulnerabilities
            }
            print(f"❌ Обнаружены проблемы с rate limiting: {len(rate_limit_vulnerabilities)}")
        else:
            self.results['tests']['rate_limiting'] = {'status': 'SECURE'}
            print("✅ Rate limiting работает корректно")
    
    def test_security_headers(self):
        """Тест заголовков безопасности"""
        print("🔍 Тестирование заголовков безопасности...")
        
        try:
            response = self.session.get(self.base_url, timeout=5)
            headers = response.headers
            
            required_headers = {
                'X-Frame-Options': ['DENY', 'SAMEORIGIN'],
                'X-Content-Type-Options': ['nosniff'],
                'X-XSS-Protection': ['1; mode=block', '1'],
                'Strict-Transport-Security': None,  # Любое значение
                'Content-Security-Policy': None,  # Любое значение
                'Referrer-Policy': None,  # Любое значение
            }
            
            missing_headers = []
            
            for header, expected_values in required_headers.items():
                if header not in headers:
                    missing_headers.append(f"Отсутствует заголовок: {header}")
                elif expected_values and headers[header] not in expected_values:
                    missing_headers.append(f"Неверное значение заголовка {header}: {headers[header]}")
            
            if missing_headers:
                self.results['tests']['security_headers'] = {
                    'status': 'VULNERABLE',
                    'vulnerabilities': missing_headers
                }
                print(f"❌ Проблемы с заголовками безопасности: {len(missing_headers)}")
            else:
                self.results['tests']['security_headers'] = {'status': 'SECURE'}
                print("✅ Заголовки безопасности настроены корректно")
                
        except Exception as e:
            print(f"❌ Ошибка при тестировании заголовков безопасности: {e}")
            self.results['tests']['security_headers'] = {
                'status': 'ERROR',
                'error': str(e)
            }
    
    def run_all_tests(self):
        """Запуск всех тестов безопасности"""
        print("🚀 Запуск комплексного тестирования защиты от кибератак...")
        print("=" * 60)
        
        tests = [
            self.test_sql_injection,
            self.test_xss_attacks,
            self.test_csrf_attacks,
            self.test_path_traversal,
            self.test_file_upload_vulnerabilities,
            self.test_authentication_bypass,
            self.test_information_disclosure,
            self.test_rate_limiting,
            self.test_security_headers,
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
        """Генерация отчета о тестировании"""
        print("\n" + "=" * 60)
        print("ОТЧЕТ О ТЕСТИРОВАНИИ ЗАЩИТЫ ОТ КИБЕРАТАК")
        print("=" * 60)
        
        print(f"Общий статус: {self.results['overall_status']}")
        print(f"Дата тестирования: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        print()
        
        for test_name, test_result in self.results['tests'].items():
            status = test_result.get('status', 'UNKNOWN')
            if status == 'SECURE':
                print(f"✅ {test_name}: БЕЗОПАСНО")
            elif status == 'VULNERABLE':
                print(f"❌ {test_name}: УЯЗВИМО")
                vulnerabilities = test_result.get('vulnerabilities', [])
                for vuln in vulnerabilities[:3]:  # Показываем первые 3 уязвимости
                    print(f"   - {vuln}")
                if len(vulnerabilities) > 3:
                    print(f"   ... и еще {len(vulnerabilities) - 3} уязвимостей")
            else:
                print(f"⚠️  {test_name}: ОШИБКА")
        
        print()
        
        if self.results['overall_status'] == 'SECURE':
            print("🎉 ВСЕ ТЕСТЫ ПРОЙДЕНЫ УСПЕШНО!")
            print("✅ Система защищена от основных типов кибератак")
        else:
            print("⚠️  ОБНАРУЖЕНЫ УЯЗВИМОСТИ!")
            print("🔧 Рекомендуется немедленно исправить выявленные проблемы")
        
        # Сохраняем отчет в файл
        report_path = project_root / 'cyber_attack_report.json'
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
        
        print(f"\n📄 Подробный отчет сохранен в: {report_path}")


def main():
    """Главная функция"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Тестирование защиты от кибератак')
    parser.add_argument('--url', default='http://localhost:8000', 
                       help='URL тестируемого сайта')
    parser.add_argument('--output', default='cyber_attack_report.json',
                       help='Файл для сохранения отчета')
    
    args = parser.parse_args()
    
    tester = CyberAttackTester(args.url)
    tester.run_all_tests()
    
    if tester.results['overall_status'] == 'SECURE':
        print("\n✅ Тестирование завершено успешно!")
        sys.exit(0)
    else:
        print("\n⚠️  Тестирование выявило уязвимости!")
        sys.exit(1)


if __name__ == "__main__":
    main() 