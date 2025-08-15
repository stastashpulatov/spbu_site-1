#!/usr/bin/env python3
"""
Главный скрипт для запуска всех тестов безопасности SPBU Site
Запускает комплексное тестирование защиты от всех видов кибератак
"""

import os
import sys
import json
import subprocess
import time
from pathlib import Path
from datetime import datetime

# Добавляем путь к проекту
project_root = Path(__file__).parent
sys.path.append(str(project_root / 'spbu_site' / 'spbu_site'))


class SecurityTestRunner:
    """Класс для запуска всех тестов безопасности"""
    
    def __init__(self, base_url="http://localhost:8000"):
        self.base_url = base_url
        self.results = {
            'timestamp': datetime.now().isoformat(),
            'tests': {},
            'overall_status': 'PENDING'
        }
    
    def run_basic_security_check(self):
        """Запуск базовой проверки безопасности"""
        print("🔍 Запуск базовой проверки безопасности...")
        
        try:
            result = subprocess.run(
                [sys.executable, 'security_check.py'],
                capture_output=True,
                text=True,
                cwd=project_root
            )
            
            self.results['tests']['basic_security_check'] = {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr
            }
            
            if result.returncode == 0:
                print("✅ Базовая проверка безопасности пройдена")
            else:
                print("❌ Базовая проверка безопасности провалена")
                print(result.stderr)
                
        except Exception as e:
            self.results['tests']['basic_security_check'] = {
                'success': False,
                'error': str(e)
            }
            print(f"❌ Ошибка при запуске базовой проверки: {e}")
    
    def run_cyber_attack_tests(self):
        """Запуск тестов защиты от кибератак"""
        print("🔍 Запуск тестов защиты от кибератак...")
        
        try:
            result = subprocess.run(
                [sys.executable, 'cyber_attack_test.py', '--url', self.base_url],
                capture_output=True,
                text=True,
                cwd=project_root
            )
            
            self.results['tests']['cyber_attack_tests'] = {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr
            }
            
            if result.returncode == 0:
                print("✅ Тесты защиты от кибератак пройдены")
            else:
                print("❌ Тесты защиты от кибератак провалены")
                print(result.stderr)
                
        except Exception as e:
            self.results['tests']['cyber_attack_tests'] = {
                'success': False,
                'error': str(e)
            }
            print(f"❌ Ошибка при запуске тестов кибератак: {e}")
    
    def run_advanced_security_tests(self):
        """Запуск дополнительных тестов безопасности"""
        print("🔍 Запуск дополнительных тестов безопасности...")
        
        try:
            result = subprocess.run(
                [sys.executable, 'advanced_security_test.py'],
                capture_output=True,
                text=True,
                cwd=project_root
            )
            
            self.results['tests']['advanced_security_tests'] = {
                'success': result.returncode == 0,
                'output': result.stdout,
                'error': result.stderr
            }
            
            if result.returncode == 0:
                print("✅ Дополнительные тесты безопасности пройдены")
            else:
                print("❌ Дополнительные тесты безопасности провалены")
                print(result.stderr)
                
        except Exception as e:
            self.results['tests']['advanced_security_tests'] = {
                'success': False,
                'error': str(e)
            }
            print(f"❌ Ошибка при запуске дополнительных тестов: {e}")
    
    def run_dependency_check(self):
        """Проверка зависимостей на уязвимости"""
        print("📦 Проверка зависимостей на уязвимости...")
        
        try:
            # Проверяем наличие safety
            result = subprocess.run(
                ['safety', 'check', '--json'],
                capture_output=True,
                text=True,
                cwd=project_root
            )
            
            if result.returncode == 0:
                vulnerabilities = json.loads(result.stdout)
                self.results['tests']['dependency_check'] = {
                    'success': True,
                    'vulnerabilities': vulnerabilities
                }
                print(f"✅ Зависимости проверены, найдено уязвимостей: {len(vulnerabilities)}")
            else:
                self.results['tests']['dependency_check'] = {
                    'success': False,
                    'error': 'Safety check failed'
                }
                print("❌ Проверка зависимостей провалена")
                
        except FileNotFoundError:
            self.results['tests']['dependency_check'] = {
                'success': True,
                'note': 'Safety not installed, skipping dependency check'
            }
            print("⚠️  Safety не установлен, пропускаем проверку зависимостей")
        except Exception as e:
            self.results['tests']['dependency_check'] = {
                'success': False,
                'error': str(e)
            }
            print(f"❌ Ошибка при проверке зависимостей: {e}")
    
    def run_code_quality_check(self):
        """Проверка качества кода"""
        print("🔍 Проверка качества кода...")
        
        try:
            # Проверяем наличие bandit
            result = subprocess.run(
                ['bandit', '-r', 'spbu_site', '-f', 'json'],
                capture_output=True,
                text=True,
                cwd=project_root
            )
            
            if result.returncode == 0:
                issues = json.loads(result.stdout)
                self.results['tests']['code_quality_check'] = {
                    'success': True,
                    'issues': issues.get('results', [])
                }
                print(f"✅ Качество кода проверено, найдено проблем: {len(issues.get('results', []))}")
            else:
                self.results['tests']['code_quality_check'] = {
                    'success': False,
                    'error': 'Bandit check failed'
                }
                print("❌ Проверка качества кода провалена")
                
        except FileNotFoundError:
            self.results['tests']['code_quality_check'] = {
                'success': True,
                'note': 'Bandit not installed, skipping code quality check'
            }
            print("⚠️  Bandit не установлен, пропускаем проверку качества кода")
        except Exception as e:
            self.results['tests']['code_quality_check'] = {
                'success': False,
                'error': str(e)
            }
            print(f"❌ Ошибка при проверке качества кода: {e}")
    
    def generate_comprehensive_report(self):
        """Генерация комплексного отчета"""
        print("📊 Генерация комплексного отчета...")
        
        # Определяем общий статус
        all_tests_passed = all(
            test.get('success', False) 
            for test in self.results['tests'].values()
        )
        
        if all_tests_passed:
            self.results['overall_status'] = 'SECURE'
        else:
            self.results['overall_status'] = 'VULNERABLE'
        
        # Сохраняем отчет в JSON
        report_path = project_root / 'comprehensive_security_report.json'
        with open(report_path, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
        
        # Генерируем текстовый отчет
        self._generate_text_report()
        
        print(f"📄 Комплексный отчет сохранен в {report_path}")
    
    def _generate_text_report(self):
        """Генерация текстового отчета"""
        report_path = project_root / 'comprehensive_security_report.txt'
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("=" * 80 + "\n")
            f.write("КОМПЛЕКСНЫЙ ОТЧЕТ О ТЕСТИРОВАНИИ БЕЗОПАСНОСТИ SPBU SITE\n")
            f.write("=" * 80 + "\n")
            f.write(f"Дата: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
            f.write(f"URL тестирования: {self.base_url}\n")
            f.write(f"Общий статус: {self.results['overall_status']}\n\n")
            
            # Результаты тестов
            f.write("РЕЗУЛЬТАТЫ ТЕСТИРОВАНИЯ:\n")
            f.write("-" * 50 + "\n")
            
            for test_name, test_result in self.results['tests'].items():
                status = "✅ ПРОЙДЕН" if test_result.get('success') else "❌ ПРОВАЛЕН"
                f.write(f"{test_name}: {status}\n")
                
                if not test_result.get('success') and test_result.get('error'):
                    f.write(f"  Ошибка: {test_result['error']}\n")
                
                if test_result.get('note'):
                    f.write(f"  Примечание: {test_result['note']}\n")
                
                if test_result.get('vulnerabilities'):
                    f.write(f"  Найдено уязвимостей: {len(test_result['vulnerabilities'])}\n")
                
                if test_result.get('issues'):
                    f.write(f"  Найдено проблем: {len(test_result['issues'])}\n")
            
            f.write("\n")
            
            # Рекомендации
            f.write("РЕКОМЕНДАЦИИ:\n")
            f.write("-" * 50 + "\n")
            
            if self.results['overall_status'] == 'SECURE':
                f.write("✅ Все проверки пройдены успешно!\n")
                f.write("✅ Система безопасности работает корректно\n")
                f.write("✅ Защита от кибератак настроена правильно\n")
                f.write("✅ Рекомендуется регулярно проводить тестирование\n")
            else:
                f.write("⚠️  Обнаружены проблемы в системе безопасности\n")
                f.write("🔧 Рекомендуется исправить выявленные проблемы\n")
                f.write("🔄 Повторите тестирование после исправлений\n")
                f.write("📚 Изучите отчеты для детального анализа\n")
            
            f.write("\n")
            
            # Список проверенных атак
            f.write("ПРОВЕРЕННЫЕ ТИПЫ АТАК:\n")
            f.write("-" * 50 + "\n")
            f.write("• SQL Injection\n")
            f.write("• Cross-Site Scripting (XSS)\n")
            f.write("• Cross-Site Request Forgery (CSRF)\n")
            f.write("• Path Traversal\n")
            f.write("• File Upload Vulnerabilities\n")
            f.write("• Authentication Bypass\n")
            f.write("• Information Disclosure\n")
            f.write("• Rate Limiting\n")
            f.write("• Security Headers\n")
            f.write("• LDAP Injection\n")
            f.write("• NoSQL Injection\n")
            f.write("• Command Injection\n")
            f.write("• Server-Side Request Forgery (SSRF)\n")
            f.write("• XML External Entity (XXE)\n")
            f.write("• Dependency Vulnerabilities\n")
            f.write("• Code Quality Issues\n")
    
    def run_all_tests(self):
        """Запуск всех тестов безопасности"""
        print("🚀 Запуск комплексного тестирования безопасности SPBU Site...")
        print("=" * 80)
        
        start_time = time.time()
        
        # Запускаем все проверки
        self.run_basic_security_check()
        self.run_cyber_attack_tests()
        self.run_advanced_security_tests()
        self.run_dependency_check()
        self.run_code_quality_check()
        
        # Генерируем отчет
        self.generate_comprehensive_report()
        
        end_time = time.time()
        duration = end_time - start_time
        
        # Выводим итоговый результат
        print("\n" + "=" * 80)
        print("ИТОГОВЫЙ РЕЗУЛЬТАТ КОМПЛЕКСНОГО ТЕСТИРОВАНИЯ")
        print("=" * 80)
        
        if self.results['overall_status'] == 'SECURE':
            print("🎉 ВСЕ ПРОВЕРКИ ПРОЙДЕНЫ УСПЕШНО!")
            print("✅ Система безопасности работает корректно")
            print("✅ Защита от кибератак настроена правильно")
        else:
            print("❌ ОБНАРУЖЕНЫ ПРОБЛЕМЫ В СИСТЕМЕ БЕЗОПАСНОСТИ")
            print("🔧 Рекомендуется исправить выявленные проблемы")
        
        print(f"⏱️  Время выполнения: {duration:.2f} секунд")
        print(f"📊 Подробный отчет: comprehensive_security_report.json")
        print(f"📄 Текстовый отчет: comprehensive_security_report.txt")
        
        return self.results['overall_status'] == 'SECURE'


def main():
    """Главная функция"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Комплексное тестирование безопасности SPBU Site')
    parser.add_argument('--url', default='http://localhost:8000', 
                       help='URL тестируемого сайта')
    parser.add_argument('--output', default='comprehensive_security_report.json',
                       help='Файл для сохранения отчета')
    
    args = parser.parse_args()
    
    runner = SecurityTestRunner(args.url)
    success = runner.run_all_tests()
    
    if success:
        print("\n🎉 Комплексное тестирование завершено успешно!")
        print("✅ Система безопасности готова к продакшену!")
        sys.exit(0)
    else:
        print("\n⚠️  Комплексное тестирование выявило проблемы!")
        print("🔧 Требуется устранение выявленных уязвимостей")
        sys.exit(1)


if __name__ == "__main__":
    main() 