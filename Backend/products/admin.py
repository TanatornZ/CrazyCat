from django.contrib import admin
from .models import *


# Register your models here.
class SubCategoryInline(admin.TabularInline):
    model = SubCategory
    fk_name = 'category'


class ProductimagesInline(admin.TabularInline):
    model = Productimages
    fk_name = 'product'


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    inlines = [SubCategoryInline]
    list_display = ['name']
    list_filter = ['name']


class ProductDetailInline(admin.TabularInline):
    model = ProductDetail
    fk_name = "product"


class ProductHowToUse(admin.TabularInline):
    model = ProductHowToUse
    fk_name = 'product'


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [ProductimagesInline, ProductDetailInline,ProductHowToUse]
    list_display = ['name', 'price', 'amount', 'get_subcategory', 'created_date', 'updated_date']
    search_fields = ['name']
    list_filter = ['subcategory__category__name', 'subcategory__name']
    filter_horizontal = ['subcategory']


@admin.register(Productimages)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['image_tag']

    def image_tag(self, obj):
        from django.utils.html import format_html
        return format_html(
            f'<img style="width:100px;" src="{obj.image.url}" />'
        )

    image_tag.short_description = 'Image'
    image_tag.allow_tags = True
