from django.contrib import admin
from .models import News, Event, Announcement, GalleryImage


class GalleryImageInline(admin.TabularInline):
    model = GalleryImage
    extra = 1
    fields = ("image", "title", "caption", "is_visible")


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ("title", "publication_date", "is_visible")
    list_filter = ("is_visible", "publication_date")
    search_fields = ("title", "description")
    inlines = [GalleryImageInline]


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "is_visible")
    list_filter = ("is_visible", "date")
    search_fields = ("title", "description", "location")
    inlines = [GalleryImageInline]


@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ("title", "publication_date", "is_visible")
    list_filter = ("is_visible", "publication_date")
    search_fields = ("title", "description")
    inlines = [GalleryImageInline]


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ("id", "title", "is_visible", "created_at", "news", "event", "announcement")
    list_filter = ("is_visible", "created_at")
    search_fields = ("title", "caption")
