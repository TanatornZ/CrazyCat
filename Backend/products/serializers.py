from rest_framework.serializers import ModelSerializer
from .models import *


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class SubCategorySerializer(ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'

    category = CategorySerializer(read_only=True)


class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = Productimages
        fields = '__all__'


class ProductImageSerializer2(ModelSerializer):
    class Meta:
        model = Productimages
        fields = ['id', 'image']


class ProductDetailSerializer(ModelSerializer):
    class Meta:
        model = ProductDetail
        fields = ['properTy', 'caution']


class ProductHowToUseSerializer(ModelSerializer):
    class Meta:
        model = ProductHowToUse
        fields = ['howToUse']


class ProductSerializer(ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

    subcategory = SubCategorySerializer(read_only=True, many=True)
    productdetail = ProductDetailSerializer(read_only=True)
    productimages = ProductImageSerializer(read_only=True, many=True)
    howToUseProduct = ProductHowToUseSerializer(read_only=True, many=True)
