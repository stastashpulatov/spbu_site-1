from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.exceptions import PermissionDenied


class IsOwnerOrAdminCanReadUpdate(BasePermission):
    message = "Доступ запрещен. Вы не являетесь владельцем или администратором."

    def has_permission(self, request, view):
        # Все запросы на изменение роли должны проверяться
        if 'role' in request.data and not request.user.is_superuser:
            raise PermissionDenied('Только суперпользователь может изменять роли')
        return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        # Проверка доступа к объекту
        if request.user.is_authenticated:
            # Роли может менять только суперпользователь
            if 'role' in request.data and not request.user.is_superuser:
                raise PermissionDenied('Только суперпользователь может изменять роли')
            
            try:
                # Суперпользователь имеет полный доступ
                if request.user.is_superuser:
                    return True
                # Админы могут управлять объектами, но не ролями
                if request.user.role == 'admin':
                    return True
                # Пользователи могут управлять только своими объектами
                return obj.creator == request.user
            except AttributeError:
                return False
        return False