from django.urls import path
from . import views


app_name = 'ro'

urlpatterns = [
    path("", views.home, name="home"),
]
