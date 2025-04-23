from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, EventViewSet, ScheduleViewSet

router = DefaultRouter()
router.register('news', NewsViewSet, basename='news')
router.register('events', EventViewSet, basename='events')
router.register('schedule', ScheduleViewSet, basename='schedule')

urlpatterns = [
    path('', include(router.urls)),
]