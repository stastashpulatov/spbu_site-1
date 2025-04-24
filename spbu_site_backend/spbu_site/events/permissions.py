from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsAdminOrTeacher(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True

        if not request.user or not request.user.is_authenticated:
            return False

        role = getattr(request.user, 'role', None)
        return role in ['admin', 'teacher'] or request.user.is_staff or request.user.is_superuser