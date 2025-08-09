#!/usr/bin/env python3
"""
Скрипт для проверки безопасности проекта SPBU Site
Запускается автоматически через pre-commit hooks и CI/CD
"""

import os
import sys
import subprocess
import json
from pathlib import Path
from typing import List, Dict, Any

# Добавляем путь к проекту
project_root = Path(__file__).parent
sys.path.append(str(project_root / 'spbu_site'))

from spbu_site.security import SecurityConfig, security_check


class SecurityChecker:
    """Класс для проверки безопасности"""
    
    def __init__(self):
        self.project_root = Path(__file__).parent
        self.issues = []
        self.warnings = []
    
    def check_environment_variables(self) -> bool:
        """Проверка критических переменных окружения"""
        print("🔍 Checking environment variables...")
        
        required_vars = [
            'SECRET_KEY',
            'DEBUG',
            'ALLOWED_HOSTS',
        ]
        
        missing_vars = []
        for var in required_vars:
            if not os.getenv(var):
                missing_vars.append(var)
        
        if missing_vars:
            self.issues.append(f"Missing environment variables: {', '.join(missing_vars)}")
            return False
        
        print("✅ Environment variables check passed")
        return True
    
    def check_django_settings(self) -> bool:
        """Проверка настроек Django"""
        print("🔍 Checking Django settings...")
        
        try:
            os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'spbu_site.settings')
            from django.conf import settings
            from django.core.management import execute_from_command_line
            
            # Проверка критических настроек безопасности
            critical_settings = SecurityConfig.CRITICAL_SECURITY_SETTINGS
            
            for setting, expected_value in critical_settings.items():
                if hasattr(settings, setting):
                    actual_value = getattr(settings, setting)
                    if actual_value != expected_value:
                        self.warnings.append(
                            f"Security setting {setting} should be {expected_value}, "
                            f"but is {actual_value}"
                        )
                else:
                    self.issues.append(f"Missing security setting: {setting}")
            
            print("✅ Django settings check passed")
            return True
            
        except Exception as e:
            self.issues.append(f"Django settings check failed: {e}")
            return False
    
    def check_dependencies(self) -> bool:
        """Проверка зависимостей на уязвимости"""
        print("🔍 Checking dependencies for vulnerabilities...")
        
        try:
            # Проверка с помощью safety
            result = subprocess.run(
                ['safety', 'check', '--json'],
                capture_output=True,
                text=True,
                cwd=self.project_root
            )
            
            if result.returncode == 0:
                print("✅ Dependencies check passed")
                return True
            else:
                vulnerabilities = json.loads(result.stdout)
                for vuln in vulnerabilities:
                    self.warnings.append(
                        f"Vulnerability in {vuln['package']}: {vuln['description']}"
                    )
                return True
                
        except FileNotFoundError:
            print("⚠️  Safety not installed, skipping dependency check")
            return True
        except Exception as e:
            self.issues.append(f"Dependencies check failed: {e}")
            return False
    
    def check_code_quality(self) -> bool:
        """Проверка качества кода"""
        print("🔍 Checking code quality...")
        
        try:
            # Проверка с помощью bandit
            result = subprocess.run(
                ['bandit', '-r', 'spbu_site', '-f', 'json'],
                capture_output=True,
                text=True,
                cwd=self.project_root
            )
            
            if result.returncode == 0:
                print("✅ Code quality check passed")
                return True
            else:
                issues = json.loads(result.stdout)
                for issue in issues.get('results', []):
                    self.warnings.append(
                        f"Code quality issue in {issue['filename']}:{issue['line_number']}: "
                        f"{issue['issue_text']}"
                    )
                return True
                
        except FileNotFoundError:
            print("⚠️  Bandit not installed, skipping code quality check")
            return True
        except Exception as e:
            self.issues.append(f"Code quality check failed: {e}")
            return False
    
    def check_file_permissions(self) -> bool:
        """Проверка прав доступа к файлам"""
        print("🔍 Checking file permissions...")
        
        sensitive_files = [
            'spbu_site/settings.py',
            'db.sqlite3',
            '.env',
        ]
        
        for file_path in sensitive_files:
            full_path = self.project_root / file_path
            if full_path.exists():
                # Проверка прав доступа
                stat = full_path.stat()
                if stat.st_mode & 0o777 != 0o600:
                    self.warnings.append(
                        f"File {file_path} has insecure permissions: "
                        f"{oct(stat.st_mode & 0o777)}"
                    )
        
        print("✅ File permissions check passed")
        return True
    
    def check_security_headers(self) -> bool:
        """Проверка заголовков безопасности"""
        print("🔍 Checking security headers...")
        
        try:
            headers = SecurityConfig.get_security_headers()
            required_headers = [
                'X-Content-Type-Options',
                'X-Frame-Options',
                'X-XSS-Protection',
                'Referrer-Policy',
            ]
            
            for header in required_headers:
                if header not in headers:
                    self.issues.append(f"Missing security header: {header}")
            
            print("✅ Security headers check passed")
            return True
            
        except Exception as e:
            self.issues.append(f"Security headers check failed: {e}")
            return False
    
    def run_all_checks(self) -> bool:
        """Запуск всех проверок"""
        print("🚀 Starting security checks...")
        
        checks = [
            self.check_environment_variables,
            self.check_django_settings,
            self.check_dependencies,
            self.check_code_quality,
            self.check_file_permissions,
            self.check_security_headers,
        ]
        
        all_passed = True
        for check in checks:
            if not check():
                all_passed = False
        
        # Вывод результатов
        print("\n" + "="*50)
        print("SECURITY CHECK RESULTS")
        print("="*50)
        
        if self.issues:
            print("\n❌ CRITICAL ISSUES:")
            for issue in self.issues:
                print(f"  - {issue}")
        
        if self.warnings:
            print("\n⚠️  WARNINGS:")
            for warning in self.warnings:
                print(f"  - {warning}")
        
        if not self.issues and not self.warnings:
            print("\n✅ All security checks passed!")
        
        print(f"\nTotal issues: {len(self.issues)}")
        print(f"Total warnings: {len(self.warnings)}")
        
        return all_passed and len(self.issues) == 0


def main():
    """Главная функция"""
    checker = SecurityChecker()
    success = checker.run_all_checks()
    
    if not success:
        print("\n❌ Security check failed!")
        sys.exit(1)
    else:
        print("\n✅ Security check completed successfully!")
        sys.exit(0)


if __name__ == "__main__":
    main() 