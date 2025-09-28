from django.contrib import admin
from .models import Schedule, Group, Room
# Register your models here.

admin.site.register(Schedule)
admin.site.register(Group)
admin.site.register(Room)