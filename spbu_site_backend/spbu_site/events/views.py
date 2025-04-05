from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from .permissions import IsAdminOrTeacher

from .models import News, Event
from .serializers import NewsSerializer, EventSerializer



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
