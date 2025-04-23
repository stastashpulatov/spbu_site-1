from rest_framework import permissions

class IsAdminOrOwnerTeacher(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.user.is_staff or getattr(request.user, 'role', None) == 'admin':
            return True
        if hasattr(request.user, 'teacher'):
            return obj.teacher == request.user.teacher
        return False
