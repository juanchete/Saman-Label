from django.db import models



class Cliente(models.Model):
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    identification = models.IntegerField()
    def __str__(self):
        return self.name

# Create your models here.
