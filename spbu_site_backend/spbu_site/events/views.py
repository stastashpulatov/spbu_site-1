from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .permissions import IsAdminOrSuperUser

from .models import News, Event
from .serializers import NewsSerializer, EventSerializer


# Create your views here.

class NewsViewSet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrSuperUser]

    def get_queryset(self):
        queryset = News.objects.all().order_by('-publication_date')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class EventViewSet(viewsets.ModelViewSet):
    serializer_class = EventSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrSuperUser]

    def get_queryset(self):
        queryset = Event.objects.all().order_by('-date')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)
