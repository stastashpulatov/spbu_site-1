from django.urls import path
from .views import MaintenanceStatusView

app_name = 'maintenance'

urlpatterns = [
    path('status/', MaintenanceStatusView.as_view(), name='maintenance_status'),
]
