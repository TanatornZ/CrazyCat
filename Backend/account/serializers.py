from rest_framework.serializers import ModelSerializer
from .models import *


class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'


class CustomerSerializer(ModelSerializer):
    class Meta:
        model = CustomerUser
        fields = '__all__'

    customerAddress = AddressSerializer(read_only=True,many=True)