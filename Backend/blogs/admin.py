from django.contrib import admin

# Register your models here.
from blogs.models import *


class DocumentImageInline(admin.TabularInline):
    model = DocumentImage
    fk_name = 'document'


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    inlines = [DocumentImageInline]
    list_display = ['type', 'title', 'date_create', 'date_update']


# ------------------------------------------------------------------------------------------

class QuestionImageInline(admin.TabularInline):
    model = QuestionImage
    fk_name = 'question'


class HastagInline(admin.TabularInline):
    model = Hastag
    fk_name = 'question'


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    inlines = [QuestionImageInline, HastagInline]
    list_display = ['question', 'number_of_likes', 'date_post', 'posted_by']


# ------------------------------------------------------------------------------------------

class AnswerImageInline(admin.TabularInline):
    model = AnswerImage
    fk_name = 'answer'


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    inlines = [AnswerImageInline]
    list_display = ['answer', 'res_by', 'res_date']
