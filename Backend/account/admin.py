from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(CustomerUser)
class CustomerUserAdmin(admin.ModelAdmin):
    list_display = ['username', 'first_name', 'last_name', 'tel', 'is_staff', 'is_active']
    list_filter = ['is_staff', 'is_active']

    def save_model(self, request, obj, form, change):
        try:
            user_database = CustomerUser.objects.get(pk=obj.pk)
        except Exception:
            user_database = None

        if user_database is None or not (
                check_password(form.data['password'], user_database.password) or user_database.password == form.data[
            'password']):
            obj.password = make_password(obj.password)
        else:
            obj.password = user_database.password

        super().save_model(request, obj, form, change)


@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
    list_display = ['customer', 'house_number', 'sub_district', 'district', 'province', 'detail']
    list_filter = ['sub_district', 'district', 'province']
