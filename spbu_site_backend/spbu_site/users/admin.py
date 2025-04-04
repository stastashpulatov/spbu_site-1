from django.contrib import admin

from .form import UserAdmin
from .models import CustomUser

# Register your models here.
admin.site.register(CustomUser, UserAdmin)