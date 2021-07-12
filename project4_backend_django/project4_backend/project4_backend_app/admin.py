from django.contrib import admin

# Register your models here.

from .models import User, Post, UserUpdatedPost

admin.site.register(User)
admin.site.register(Post)
admin.site.register(UserUpdatedPost)


