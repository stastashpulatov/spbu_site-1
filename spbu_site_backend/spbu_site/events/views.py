from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from .permissions import IsAdminOrSuperUser

from .models import News, Event, Announcement, GalleryImage
from .serializers import NewsSerializer, EventSerializer, AnnouncementSerializer, GalleryImageSerializer


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


class AnnouncementViewSet(viewsets.ModelViewSet):
    serializer_class = AnnouncementSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrSuperUser]

    def get_queryset(self):
        queryset = Announcement.objects.all().order_by('-publication_date')
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


class GalleryImageViewSet(viewsets.ModelViewSet):
    serializer_class = GalleryImageSerializer
    pagination_class = PageNumberPagination
    permission_classes = [IsAdminOrSuperUser]

    def get_queryset(self):
        queryset = GalleryImage.objects.all().order_by('-created_at')
        if not (self.request.user.is_staff or getattr(self.request.user, 'role', None) in ['admin', 'teacher']):
            queryset = queryset.filter(is_visible=True)
        # Опционально: фильтры по привязке
        news_id = self.request.query_params.get('news')
        event_id = self.request.query_params.get('event')
        announcement_id = self.request.query_params.get('announcement')
        if news_id:
            queryset = queryset.filter(news_id=news_id)
        if event_id:
            queryset = queryset.filter(event_id=event_id)
        if announcement_id:
            queryset = queryset.filter(announcement_id=announcement_id)
        return queryset

    def get_serializer_context(self):
        context = super().get_serializer_context()
        context['request'] = self.request
        return context


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
