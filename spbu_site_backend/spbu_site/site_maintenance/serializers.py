from rest_framework import serializers
from .models import MaintenanceMode
from django.utils import timezone


class MaintenanceModeSerializer(serializers.ModelSerializer):
    """Сериализатор для режима технических работ"""
    
    remaining_time = serializers.SerializerMethodField()
    is_expired = serializers.SerializerMethodField()
    
    class Meta:
        model = MaintenanceMode
        fields = [
            'is_active', 
            'title', 
            'message', 
            'start_time', 
            'estimated_end_time',
            'remaining_time',
            'is_expired'
        ]
    
    def get_remaining_time(self, obj):
        """Получить оставшееся время в секундах"""
        if obj.is_active and obj.estimated_end_time:
            remaining = obj.get_remaining_time()
            if remaining:
                return int(remaining.total_seconds())
        return None
    
    def get_is_expired(self, obj):
        """Проверить, истекло ли время"""
        return obj.is_expired()
