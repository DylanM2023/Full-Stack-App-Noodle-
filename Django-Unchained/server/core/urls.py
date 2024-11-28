from django.urls import path
from . import views
from core.views import *

urlpatterns = [
    path('home/', views.HomeView.as_view(), name = 'home'),
    path('logout/', views.LogoutView.as_view(), name = 'logout'),
    path('wel/', ReactView.as_view(), name = 'something'),
]
