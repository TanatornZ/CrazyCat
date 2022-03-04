from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(Basket)
class BasketAdmin(admin.ModelAdmin):
    list_display = ['customer', 'product', 'get_price', 'Number_of_products_needed']


class SlipImageInline(admin.TabularInline):
    model = SilpImage
    fk_name = 'payment'


class ProofoftransferInline(admin.TabularInline):
    model = Proofoftransfer
    fk_name = 'payment'


class ProductPaymentInline(admin.TabularInline):
    model = ProductPayment
    fk_name = 'payment'


@admin.register(Payment)
class OrderAdmin(admin.ModelAdmin):
    inlines = [ProductPaymentInline,SlipImageInline, ProofoftransferInline]
    list_display = ['id', 'customer', 'No_products_in_the_order', 'payment_amount', 'tracking', 'status',
                    'order_date', 'order_end_date']
    list_filter = ['status', 'order_date', 'order_end_date']
    filter_horizontal = ['basket']


@admin.register(FavoriteProduct)
class FavoriteProductAdmin(admin.ModelAdmin):
    pass
