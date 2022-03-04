from django.shortcuts import render
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


# Create your views here.
class ProductView(ModelViewSet):
    queryset = Product.objects.order_by('pk')
    serializer_class = ProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['product__name']
    filterset_fields = ['subcategory', 'subcategory__category']

class ProductImageView(ModelViewSet):
    queryset = Productimages.objects.order_by('pk')
    serializer_class = ProductImageSerializer2
