from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .permissions import IsAdminOrTeacher
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import News, Event, Schedule
from .serializers import NewsSerializer, EventSerializer, ScheduleSerializer



# Create your views here.

class NewsViewSet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrTeacher]

    def get_queryset(self):
        queryset = News.objects.all().order_by('-publication_date')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        return queryset

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.get_queryset(), request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrTeacher]

    def get_queryset(self):
        queryset = Event.objects.all().order_by('-date')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        return queryset

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.get_queryset(), request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class ScheduleViewSet(viewsets.ModelViewSet):
    serializer_class = ScheduleSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrTeacher]

    def get_queryset(self):
        queryset = Schedule.objects.all()
        group = self.request.query_params.get('group', None)
        day = self.request.query_params.get('day', None)
        
        if group:
            queryset = queryset.filter(group=group)
        
        if day:
            queryset = queryset.filter(day_of_week=day)
            
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
            
        return queryset

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.get_queryset(), request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)

    @action(detail=False, methods=['get'])
    def groups(self, request):
        """Return a list of all unique groups from the schedule."""
        groups = Schedule.objects.values_list('group', flat=True).distinct().order_by('group')
        return Response(list(groups))
