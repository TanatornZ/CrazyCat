from django.db import models
from account.models import CustomerUser


# Create your models here.
class Document(models.Model):
    title = models.CharField(max_length=255)
    descrioption = models.TextField()
    type = models.CharField(max_length=255)
    general_characteristics = models.TextField()
    Habits = models.TextField()
    care = models.TextField()
    date_create = models.DateTimeField(auto_created=True, auto_now_add=True)
    date_update = models.DateTimeField(auto_now=True)


class DocumentImage(models.Model):
    image = models.ImageField(upload_to='document_image/')
    document = models.ForeignKey(Document, related_name='images', on_delete=models.CASCADE)


# ------------------------------------------------------------------------------------------


class Question(models.Model):
    question = models.TextField()
    date_post = models.DateTimeField(auto_created=True, auto_now_add=True)
    number_of_likes = models.IntegerField()
    posted_by = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.id}'


class QuestionImage(models.Model):
    image = models.ImageField(upload_to='question_image/', blank=True, null=True)
    question = models.ForeignKey(Question, related_name='questionimages', on_delete=models.CASCADE)


class Hastag(models.Model):
    hastag = models.CharField(max_length=255)
    question = models.ForeignKey(Question, related_name="questionhastag", on_delete=models.CASCADE)


# ------------------------------------------------------------------------------------------

class Answer(models.Model):
    answer = models.TextField()
    res_by = models.ForeignKey(CustomerUser, on_delete=models.CASCADE)
    res_date = models.DateTimeField(auto_created=True, auto_now_add=True)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)


class AnswerImage(models.Model):
    image = models.ImageField(upload_to='answer_image/', blank=True, null=True)
    answer = models.ForeignKey(Answer, related_name='answerimages', on_delete=models.CASCADE)
