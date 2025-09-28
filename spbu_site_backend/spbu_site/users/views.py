from rest_framework import viewsets, permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied

from .models import CustomUser, CustomUserManager
from .permisions import IsOwnerOrAdminCanReadUpdate
from .serializers import UserSerializer
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all().order_by('id')
    serializer_class = UserSerializer
    permission_classes = [IsOwnerOrAdminCanReadUpdate]
    pagination_class = PageNumberPagination

    def get(self, request):
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(self.queryset, request)
        serializer = self.serializer_class(result_page, many=True, context={'request': request})
        return paginator.get_paginated_response(serializer.data)

    def perform_create(self, serializer):
        manager = CustomUserManager()
        user = manager.create_user(
            username=serializer.validated_data['username'],
            full_name=serializer.validated_data.get('full_name', ''),
            password=serializer.validated_data['password'],
            role=serializer.validated_data.get('role', 'admin'),
        )

    @staticmethod
    def perform_create_admin(serializer):
        manager = CustomUserManager()
        user = manager.create_superuser(
            username=serializer.validated_data['username'],
            full_name=serializer.validated_data.get('full_name', ''),
            password=serializer.validated_data['password'],
            role=serializer.validated_data.get('role', 'admin'),
        )

    def update(self, request, *args, **kwargs):
        # Проверяем изменение роли
        if 'role' in request.data:
            if not request.user.is_superuser:
                raise PermissionDenied('Только суперпользователь может изменять роли пользователей')
        return super().update(request, *args, **kwargs)

    def create(self, request, *args, **kwargs):
        # Проверяем права на создание пользователей
        if not (request.user.is_authenticated and (request.user.is_superuser or request.user.role == 'admin')):
            raise PermissionDenied('Только суперпользователь или администратор может создавать новых пользователей')

        # Если пытаются создать суперпользователя
        if 'is_superuser' in request.data and request.data['is_superuser']:
            if not request.user.is_superuser:
                raise PermissionDenied('Только суперпользователь может создавать других суперпользователей')
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create_admin(serializer)
        else:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)