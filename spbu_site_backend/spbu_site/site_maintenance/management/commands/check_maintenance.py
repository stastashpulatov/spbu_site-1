from django.core.management.base import BaseCommand
from site_maintenance.models import MaintenanceMode
from django.utils import timezone


class Command(BaseCommand):
    help = 'Проверяет и автоматически отключает тех. работы по истечении времени'

    def handle(self, *args, **options):
        self.stdout.write('Проверяю тех. работы...')
        
        # Получаем все активные тех. работы
        active_maintenance = MaintenanceMode.objects.filter(is_active=True)
        
        if not active_maintenance.exists():
            self.stdout.write(self.style.SUCCESS('Активных тех. работ не найдено'))
            return
        
        deactivated_count = 0
        
        for maintenance in active_maintenance:
            if maintenance.auto_deactivate_if_expired():
                self.stdout.write(
                    self.style.WARNING(
                        f'Тех. работы "{maintenance.title}" автоматически отключены (время истекло)'
                    )
                )
                deactivated_count += 1
            else:
                remaining = maintenance.get_remaining_time()
                if remaining:
                    hours = remaining.total_seconds() // 3600
                    minutes = (remaining.total_seconds() % 3600) // 60
                    self.stdout.write(
                        f'Тех. работы "{maintenance.title}" активны. Осталось: {int(hours)}ч {int(minutes)}м'
                    )
                else:
                    self.stdout.write(f'Тех. работы "{maintenance.title}" активны (время не установлено)')
        
        if deactivated_count > 0:
            self.stdout.write(
                self.style.SUCCESS(f'Отключено тех. работ: {deactivated_count}')
            )
        else:
            self.stdout.write(self.style.SUCCESS('Все тех. работы в порядке'))
