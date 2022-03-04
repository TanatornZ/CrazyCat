# Generated by Django 4.0.1 on 2022-03-02 04:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Basket',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Number_of_products_needed', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='FavoriteProduct',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('order_date', models.DateTimeField(auto_now_add=True)),
                ('order_end_date', models.DateTimeField(blank=True, null=True)),
                ('No_products_in_the_order', models.IntegerField()),
                ('tracking', models.CharField(blank=True, max_length=20, null=True)),
                ('status', models.CharField(blank=True, max_length=255, null=True)),
                ('payment_amount', models.DecimalField(decimal_places=2, max_digits=7)),
            ],
        ),
        migrations.CreateModel(
            name='ProductPayment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('amount', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Proofoftransfer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('proofoftransfer', models.ImageField(blank=True, null=True, upload_to='tranfer/')),
            ],
        ),
        migrations.CreateModel(
            name='SilpImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slip', models.ImageField(blank=True, null=True, upload_to='slip/')),
                ('payment', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='paymentimage', to='Order.payment')),
            ],
        ),
    ]