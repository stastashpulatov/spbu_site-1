from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from .models import News, Event
from .serializers import NewsSerializer, EventSerializer


# Create your views here.

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.filter(is_visible=True).order_by('-publication_date')
    serializer_class = NewsSerializer
    pagination_class = PageNumberPagination

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.queryset, request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.filter(is_visible=True).order_by('-date')
    serializer_class = EventSerializer
    pagination_class = PageNumberPagination

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.queryset, request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)
