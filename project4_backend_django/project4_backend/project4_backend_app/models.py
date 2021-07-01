from django.db import models

class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=10)
    about = models.TextField(max_length=350)
    photo_url = models.CharField(max_length=150)

    def __str__(self):
        return self.username

class Post(models.Model):
                
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts')
    country = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    attractions = models.TextField(max_length=250)
    recommendations = models.TextField(max_length=400)
    date_traveled = models.DateField(editable=True, null=False, blank=False)
    photo_url = models.CharField(max_length=150)    
    
    def __str__(self):
        return self.city


