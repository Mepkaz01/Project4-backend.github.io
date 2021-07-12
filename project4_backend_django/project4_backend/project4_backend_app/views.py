from django.shortcuts import render
from django.core.serializers import serialize
from django.http import HttpResponse
from .models import User, Post, UserUpdatedPost
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

def get_user_updated_posts(request, pk):
    user = User.objects.get(id=pk)

    found_user_post = UserUpdatedPost.objects.filter(user=user)
    parsed_posts = serialize("json", found_user_post)
    print(parsed_posts)

    return HttpResponse(parsed_posts, content_type='application/json')

def update_post(request, ppk, upk):
    user = User.objects.get(id=upk)
    post = Post.objects.get(id=ppk)
    
    found_user_post = UserUpdatedPost.objects.filter(user=user, post=post)

    if not found_user_post:

        user_post = UserUpdatedPost(user=user, post=post)
        user_post.save()

        post.useful += 1
        post.save()

    else:
        found_user_post.delete()

        post.useful -= 1
        post.save()

    parsed_post = serialize("json", [post])

    return HttpResponse(parsed_post, content_type="application/json")    

def create_post(request, upk):
    print(request)
    print(request.body)
    parsed_body = request.body.decode('utf-8') 
    print(parsed_body)
    parsed_body = json.loads(parsed_body)
    print(parsed_body)

    user = User.objects.get(id=upk)
    post = Post(user=user, content = parsed_body['data'], useful = 0)
    post.save()

    parsed_post = serialize("json", [post])
    return HttpResponse(parsed_post, content_type = "application/json")
