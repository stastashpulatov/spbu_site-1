from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.db import models
from django.contrib.auth.hashers import make_password

# Create your models here.


class CustomUserManager(BaseUserManager):
    def create_user(self, username, full_name=None, password=None, role='Teacher'):
        if not username:
            raise ValueError('Users must have an username')
        if not password:
            raise ValueError('Users must have a password')

        user = get_user_model()(
            username=username,
            password=make_password(password),
            full_name=full_name,
            role=role,
        )
        user.save(using=self._db)
        return user

    def create_superuser(self, username, full_name=None, password=None, role='admin'):
        if not username:
            raise ValueError('Users must have an username')
        if not password:
            raise ValueError('Users must have a password')

        user = get_user_model()(
            username=username,
            password=make_password(password),
            full_name=full_name,
            role=role,
            is_staff=True,
            is_superuser=True
        )
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()
    username = models.CharField(
        max_length=150,
        unique=True,
        validators=[username_validator],
    )
    full_name = models.CharField(max_length=255, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    role = models.CharField(
        max_length=20,
        choices=[
            ('admin', 'Admin'),
            ('teacher', 'Teacher'),
        ],
        default='student'
    )
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['role', 'password']

    objects = CustomUserManager()

    def __str__(self):
        return self.username