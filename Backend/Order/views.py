from django.shortcuts import render
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


# Create your views here.
class BasketView(ModelViewSet):
    queryset = Basket.objects.order_by('pk')
    serializer_class = BasketSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['customer__id']


class PaymentView(ModelViewSet):
    queryset = Payment.objects.order_by('pk')
    serializer_class = PaymentSerializer

class PaymentEditView(ModelViewSet):
    queryset = Payment.objects.order_by('pk')
    serializer_class = PaymentSerEditializer


class FavoriteProductView(ModelViewSet):
    queryset = FavoriteProduct.objects.order_by('pk')
    serializer_class = FavoriteProductSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['customer__id']


class ProofoftransferView(ModelViewSet):
    queryset = Proofoftransfer.objects.order_by('pk')
    serializer_class = ProofoftransferSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['customer__id']


class SilpImageView(ModelViewSet):
    queryset = SilpImage.objects.order_by('pk')
    serializer_class = SlipImageEditSerializer

class ProductPaymentView(ModelViewSet):
    queryset = ProductPayment.objects.order_by('pk')
    serializer_class = ProductPaymentSerializer
