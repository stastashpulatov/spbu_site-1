from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Schedule, Group
from .serializers import ScheduleSerializer, GroupSerializer
from .permissions import IsAdminOrOwnerTeacher

class ScheduleViewSet(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    pagination_class = PageNumberPagination
    permission_classes = [permissions.AllowAny]  # Разрешаем публичный доступ к расписанию

    def get_queryset(self):
        queryset = Schedule.objects.all().order_by('day_of_week', 'start_time')
        group_id = self.request.query_params.get('group', None)
        if group_id:
            queryset = queryset.filter(group__id=group_id)
        
        # Фильтруем только видимые записи для неавторизованных пользователей
        if not (self.request.user.is_authenticated and 
                (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher'])):
            queryset = queryset.filter(is_visible=True)
        
        return queryset
        
    @action(detail=False, methods=['get'])
    def groups(self, request):
        groups = Group.objects.all()
        serializer = GroupSerializer(groups, many=True)
        return Response(serializer.data)
        
    def __str__(self):
        return self.title
