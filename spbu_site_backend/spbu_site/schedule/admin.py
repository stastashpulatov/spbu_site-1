from django.contrib import admin
from .models import Schedule, Teacher, Group, Room
# Register your models here.

admin.site.register(Schedule)
admin.site.register(Teacher)
admin.site.register(Group)
admin.site.register(Room)