from django.db import models

# Create your models here.
class Blog(models.Model):
    category = models.CharField(max_length=200, default='cat') 
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    image = models.ImageField(upload_to="blog/", blank=True, null=True)
    body = models.TextField()

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100] + "..."