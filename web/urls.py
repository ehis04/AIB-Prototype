# accounts/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pay/', views.pay, name='pay'),
    path('transactions/', views.transactions, name='transactions'),
    path('savings/', views.savings, name='savings'),
    path('contact/', views.contact, name='contact'),
    path('more/', views.more, name='more'),
    path('profile/', views.profile, name='profile'),
    path('back/', views.back, name='back'),
    path('cards/', views.cards, name="cards"),
    path('account/', views.account, name='account'),
    path('pay/', views.pay, name='pay'),
    path('statements/', views.statements, name='statements'),
]
