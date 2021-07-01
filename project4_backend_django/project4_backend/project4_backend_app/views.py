from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import User, Post
import json

def get_users(request):
    users = User.objects.all()
    parsed_users = serialize("json", users) 
    return HttpResponse(parsed_users, content_type="application/json")

def get_posts(request):
    posts = Post.objects.all()
    parsed_posts = serialize("json", posts)
    return HttpResponse(parsed_posts, content_type="application/json")

def get_user(request, pk):
    user = User.objects.get(id=pk)
    parsed_user = serialize("json", [user])
    return HttpResponse(parsed_user, content_type="application/json")

def get_user_posts(request, pk):
    posts = Post.objects.filter(user=pk)
    parsed_posts = serialize("json", posts)
    return HttpResponse(parsed_posts, content_type="application/json")    