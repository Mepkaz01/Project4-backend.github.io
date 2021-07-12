from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.get_users, name='get_users'),
    path('posts/', views.get_posts, name='get_posts'),
    path('profile/<int:pk>/', views.get_user, name='get_user'),
    path('profile/posts/<int:pk>/', views.get_user_posts, name="get_user_posts"),
    path('profile/<int:pk>/posts/', views.get_user_updated_posts, name='get_user_liked_tweets'),
    path('posts/<int:ppk>/<int:upk>/', views.update_post, name='update_post'),  
    path('tweets/<int:upk>/', views.create_post, name ='create_tweet'),
]