from django.urls import path
from .views import AdminLoginView, ProfileView

urlpatterns = [
    path('auth/admin-login/', AdminLoginView.as_view(), name='admin-login'),
    path('auth/profile/', ProfileView.as_view(), name='profile'),
]
