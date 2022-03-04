from django.shortcuts import render

# Create your views here.
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from account.serializers import *


class AddressView(ModelViewSet):
    queryset = Address.objects.order_by('pk')
    serializer_class = AddressSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['customer__id']

class CustomerUserView(ModelViewSet):
    queryset = CustomerUser.objects.order_by('pk')
    serializer_class = CustomerSerializer
