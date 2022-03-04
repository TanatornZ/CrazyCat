# Generated by Django 4.0.1 on 2022-03-02 04:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('res_date', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('answer', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_create', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('title', models.CharField(max_length=255)),
                ('descrioption', models.TextField()),
                ('type', models.CharField(max_length=255)),
                ('general_characteristics', models.TextField()),
                ('Habits', models.TextField()),
                ('care', models.TextField()),
                ('date_update', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_post', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('question', models.TextField()),
                ('number_of_likes', models.IntegerField()),
                ('posted_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='QuestionImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='question_image/')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questionimages', to='blogs.question')),
            ],
        ),
        migrations.CreateModel(
            name='Hastag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hastag', models.CharField(max_length=255)),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questionhastag', to='blogs.question')),
            ],
        ),
        migrations.CreateModel(
            name='DocumentImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='document_image/')),
                ('document', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='blogs.document')),
            ],
        ),
        migrations.CreateModel(
            name='AnswerImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='answer_image/')),
                ('answer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='answerimages', to='blogs.answer')),
            ],
        ),
        migrations.AddField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blogs.question'),
        ),
        migrations.AddField(
            model_name='answer',
            name='res_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]