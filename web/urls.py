# accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pay/', views.pay, name='pay'),
    path('transactions/', views.transactions, name='transactions'),
    path('savings/', views.savings, name='savings'),
    path('contact', views.contact, name='contact'),
]
