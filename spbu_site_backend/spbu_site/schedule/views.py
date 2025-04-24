from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from .models import Schedule, Group
from .serializers import ScheduleSerializer
from .permissions import IsAdminOrOwnerTeacher

class ScheduleViewSet(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrOwnerTeacher]

    def get_queryset(self):
        queryset = Schedule.objects.all().order_by('day_of_week', 'start_time')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        return queryset
    def __str__(self):
        return self.title
