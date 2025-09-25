from django.db import models

# Tietokanta taulut ovat täällä

class User(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    phonenum = models.FloatField(max_length=100)
    

    def __str__(self):
        return self.fname

class Responses(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    response = models.TextField()    
    
    def __str__(self):
        return self.fname
