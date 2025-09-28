from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import CustomUser


class UserSerializer(ModelSerializer):
    SENSITIVE_FIELDS = [
        'password',
        'is_staff',
        'is_superuser',
        'role',
        'is_active',
        'user_permissions',
        'groups',
        'last_login'
    ]

    class Meta:
        model = CustomUser
        fields = '__all__'

    def to_representation(self, instance):
        request = self.context.get('request')
        data = super().to_representation(instance)
        
        # Только суперпользователь видит чувствительные поля
        if not (request and request.user.is_authenticated and request.user.is_superuser):
            for field in self.SENSITIVE_FIELDS:
                data.pop(field, None)
                
        return data

    def validate(self, attrs):
        request = self.context.get('request')
        
        # Проверяем изменение роли
        if 'role' in attrs:
            # Только суперпользователь может менять роли
            if not (request and request.user.is_authenticated and request.user.is_superuser):
                raise serializers.ValidationError({'role': 'Только суперпользователь может изменять роли пользователей'})
        
        return super().validate(attrs)