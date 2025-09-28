from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.exceptions import PermissionDenied


class IsOwnerOrAdminCanReadUpdate(BasePermission):
    message = "Доступ запрещен. Вы не являетесь владельцем или администратором."

    def has_permission(self, request, view):
        if "role" in request.data and not request.user.is_superuser:
            raise PermissionDenied("Только суперпользователь может изменять роли")
        return True

    def has_object_permission(self, request, view, obj):
        if request.method in SAFE_METHODS:
            return True

        if not request.user.is_authenticated:
            return False

        if "role" in request.data and not request.user.is_superuser:
            raise PermissionDenied("Только суперпользователь может изменять роли")

        if request.user.is_superuser or request.user.role == "admin":
            return True

        return getattr(obj, "creator", None) == request.user
