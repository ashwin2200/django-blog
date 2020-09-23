from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='blogapp-homepage'),
    path('about/', views.aboutpage, name='blogapp-aboutpage'),
]
