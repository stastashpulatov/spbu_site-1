import logging
from django.http import HttpResponseRedirect
from django.utils.deprecation import MiddlewareMixin

logger = logging.getLogger(__name__)

class MaintenanceMiddleware(MiddlewareMixin):
    """Middleware для автоматического перенаправления на страницу технических работ"""
    
    def process_request(self, request):
        logger.info(f"MaintenanceMiddleware: Обрабатываю запрос к {request.path}")
        
        # Исключаем админку и API технических работ из проверки
        if (request.path.startswith('/admin/') or 
            request.path.startswith('/api/maintenance/') or
            request.path.startswith('/maintenance')):
            logger.info(f"MaintenanceMiddleware: Пропускаю {request.path} (исключение)")
            return None
        
        # Проверяем, активны ли технические работы
        try:
            # Импортируем модель здесь, чтобы избежать проблем с циклическими импортами
            from .models import MaintenanceMode
            
            maintenance = MaintenanceMode.objects.filter(is_active=True).first()
            logger.info(f"MaintenanceMiddleware: Проверяю тех. работы. Активны: {maintenance is not None}")
            
            if maintenance:
                # Проверяем, не истекло ли время
                if maintenance.auto_deactivate_if_expired():
                    logger.info("MaintenanceMiddleware: Время тех. работ истекло, автоматически отключил")
                    return None
                
                logger.info(f"MaintenanceMiddleware: Тех. работы активны! Перенаправляю на /maintenance")
                # Если технические работы активны, перенаправляем на страницу тех. работ
                return HttpResponseRedirect('/maintenance')
            else:
                logger.info("MaintenanceMiddleware: Тех. работы не активны, пропускаю")
                
        except Exception as e:
            logger.error(f"MaintenanceMiddleware: Ошибка при проверке тех. работ: {e}")
            # В случае ошибки пропускаем проверку
            pass
        
        return None
