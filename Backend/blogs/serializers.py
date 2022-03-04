from rest_framework.serializers import ModelSerializer, PrimaryKeyRelatedField
from .models import *
from drf_writable_nested import WritableNestedModelSerializer
from account.serializers import CustomerSerializer


class DocumentImageSerializer(ModelSerializer):
    class Meta:
        model = DocumentImage
        fields = ['image']


class DocumentSerializer(ModelSerializer):
    class Meta:
        model = Document
        fields = '__all__'

    images = DocumentImageSerializer(many=True, read_only=True)


class HastagSerializer(ModelSerializer):
    class Meta:
        model = Hastag
        fields = ['hastag']


class QuestionImageSerializer(ModelSerializer):
    class Meta:
        model = QuestionImage
        fields = ['image']


class HastagEditSerializer(ModelSerializer):
    class Meta:
        model = Hastag
        fields = '__all__'


class QuestionEditImageSerializer(ModelSerializer):
    class Meta:
        model = QuestionImage
        fields = '__all__'


class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

    questionhastag = HastagSerializer(many=True, read_only=True)
    questionimages = QuestionImageSerializer(many=True, read_only=True)


class AnswerImageSerializer(ModelSerializer):
    class Meta:
        model = AnswerImage
        fields = ['image']


class AnswerImageEditSerializer(ModelSerializer):
    class Meta:
        model = AnswerImage
        fields = '__all__'


class AnswerSerializer(ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'

    answerimages = AnswerImageSerializer(many=True, read_only=True)
