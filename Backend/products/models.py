from django.db import models


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    amount = models.IntegerField()
    subcategory = models.ManyToManyField(SubCategory)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    @property
    def get_subcategory(self):
        return ",".join([p.name for p in self.subcategory.all()])

    get_subcategory.fget.short_description = 'subcategory'


class ProductDetail(models.Model):
    properTy = models.TextField(blank=True, null=True)
    caution = models.TextField(blank=True, null=True)
    product = models.OneToOneField(Product, related_name='productdetail', on_delete=models.CASCADE)


class ProductHowToUse(models.Model):
    howToUse = models.TextField(blank=True, null=True)
    product = models.ForeignKey(Product,related_name='howToUseProduct' ,on_delete=models.CASCADE)


class Productimages(models.Model):
    product = models.ForeignKey(Product, related_name='productimages', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='productImg/')
