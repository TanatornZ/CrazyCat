from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.viewsets import ModelViewSet
from .serializers import *


# Create your views here.
class DocumentView(ModelViewSet):
    queryset = Document.objects.order_by('pk')
    serializer_class = DocumentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['type']


class QuestionView(ModelViewSet):
    queryset = Question.objects.order_by('pk')
    serializer_class = QuestionSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['questionhastag__hastag']
    filterset_fields = ['questionhastag__hastag']


class AnswerView(ModelViewSet):
    queryset = Answer.objects.order_by('pk')
    serializer_class = AnswerSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['question__id','res_by__id']


class AnswerImageView(ModelViewSet):
    queryset = AnswerImage.objects.order_by('pk')
    serializer_class = AnswerImageEditSerializer


class HastagView(ModelViewSet):
    queryset = Hastag.objects.order_by('pk')
    serializer_class = HastagEditSerializer


class QuestionImageView(ModelViewSet):
    queryset = QuestionImage.objects.order_by('pk')
    serializer_class = QuestionEditImageSerializer
