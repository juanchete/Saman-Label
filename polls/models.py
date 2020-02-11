from django.db import models



class Cliente(models.Model):
    name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20, default = '')
    identification = models.IntegerField()
    def __str__(self):
        return self.name

class Department (models.Model):
    departmen_name = models.CharField(max_length=50)
    def __str__(self):
        return self.departmen_name

class Employee (models.Model):
    employee_id = models.IntegerField()
    name = models.CharField(max_length=15,default='')
    last_name = models.CharField(max_length=10, default='')
    department_name = models.ForeignKey("Department", on_delete=models.SET_DEFAULT,default='1')
    hours = models.IntegerField(default=8)
    salary = models.IntegerField(default=100)
    active = models.BooleanField(default=True)
    def __str__(self):
        return self.name


