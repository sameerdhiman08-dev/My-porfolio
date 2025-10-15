from django.urls import path
from . import views  # importing views.py

urlpatterns = [
    path('', views.home, name='home'),
]
