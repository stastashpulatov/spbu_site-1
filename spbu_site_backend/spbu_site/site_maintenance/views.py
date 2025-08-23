from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.shortcuts import get_object_or_404
from .models import MaintenanceMode
from .serializers import MaintenanceModeSerializer


class MaintenanceStatusView(APIView):
    """Представление для получения статуса технических работ"""
    
    permission_classes = [AllowAny]
    
    def get(self, request):
        """Получить текущий статус технических работ"""
        try:
            # Получаем активный режим технических работ
            maintenance = MaintenanceMode.objects.filter(is_active=True).first()
            
            if maintenance:
                # Проверяем, не истекло ли время
                if maintenance.auto_deactivate_if_expired():
                    # Если тех. работы были автоматически отключены
                    return Response({
                        'is_active': False,
                        'title': None,
                        'message': None,
                        'start_time': None,
                        'estimated_end_time': None,
                        'remaining_time': None,
                        'is_expired': False
                    })
                
                serializer = MaintenanceModeSerializer(maintenance)
                return Response(serializer.data)
            else:
                # Нет активных технических работ
                return Response({
                    'is_active': False,
                    'title': None,
                    'message': None,
                    'start_time': None,
                    'estimated_end_time': None,
                    'remaining_time': None,
                    'is_expired': False
                })
                
        except Exception as e:
            return Response(
                {'error': 'Ошибка при получении статуса технических работ'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
