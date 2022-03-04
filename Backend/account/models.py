from django.contrib.auth.hashers import check_password, make_password
from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class CustomerUser(AbstractUser):
    tel = models.CharField(max_length=10, blank=True, null=True)
    profile_image = models.ImageField(blank=True, null=True, upload_to='profile_image/')

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


class Address(models.Model):
    house_number = models.CharField(max_length=255)
    sub_district = models.CharField(max_length=255)
    district = models.CharField(max_length=255)
    province = models.CharField(max_length=255)
    postal = models.CharField(max_length=6)
    detail = models.TextField()
    customer = models.ForeignKey(CustomerUser,related_name='customerAddress', on_delete=models.CASCADE)
