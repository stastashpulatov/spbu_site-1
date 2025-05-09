from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, EventViewSet

router = DefaultRouter()
router.register('news', NewsViewSet, basename='news')
router.register('events', EventViewSet, basename='events')
urlpatterns = [
    path('', include(router.urls)),
]