from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, EventViewSet, AnnouncementViewSet, GalleryImageViewSet

router = DefaultRouter()
router.register('news', NewsViewSet, basename='news')
router.register('events', EventViewSet, basename='events')
router.register('announcements', AnnouncementViewSet, basename='announcements')
router.register('gallery', GalleryImageViewSet, basename='gallery')
urlpatterns = [
    path('', include(router.urls)),
]