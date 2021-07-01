from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_users, name='get_users'),
    path('posts/', views.get_posts, name='get_posts'),
    path('profile/<int:pk>/', views.get_user, name='get_user'),
    path('profile/posts/<int:pk>/', views.get_user_posts, name="get_user_posts"),
       
]