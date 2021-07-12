from django.db import models

class User(models.Model):
    
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=10)
    about = models.TextField(max_length=400)
    photo = models.CharField(max_length=150)

    def __str__(self):
        return self.username

class Post(models.Model):
                
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    date_posted = models.DateField(editable=True, null=False, blank=False)
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    to_do = models.TextField(max_length=500)
    to_eat = models.TextField(max_length=500)    
    to_stay = models.CharField(max_length=500)
    tips = models.CharField(max_length=500)
    cost = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.CharField(max_length=150)
    useful = models.PositiveIntegerField()
        
    def __str__(self):
        return self.city

class UserUpdatedPost(models.Model): 
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='userupdatedposts')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='postupdatedusers')

    def __str__(self):
        return self.post.content

