from django.contrib import admin
from .models import *
# from django.apps import apps


# class ListAdminMixin(object):
#     def __init__(self, model, admin_site):
#         self.list_display = [field.name for field in model._meta.fields]
#         super(ListAdminMixin, self).__init__(model, admin_site)


# models = apps.get_models()

# for model in models:
#     admin_class = type('AdminClass', (ListAdminMixin, admin.ModelAdmin), {})
#     try:
#         admin.site.register(model, admin_class)
#     except admin.sites.AlreadyRegistered:
#         pass
# # #from .models import Cliente, Employee ,Department
# # from .models import *

# #############################Foreign Keys###################################
class ProductIdInlines(admin.TabularInline):
    model = ProductoId

class ProductListaInLines(admin.TabularInline):
    model = Prod_Lista

# class NominaDeptInlines(admin.TabularInline):
#     model = NominaDept

# class ProdStockInlines(admin.TabularInline):
#     model = Prod_Stock
# #############################################################################

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('name', 'last_name','cedula','telephone','birthday')

class NominaDetalladaAdmin(admin.ModelAdmin):
    list_display = ('cedula','name','last_name','salary','department')
    
#class NominaDeptAdmin(admin.ModelAdmin):
    

class ProductListAdmin(admin.ModelAdmin):
    list_display = ('kind','name','price','discount')

 
# class ProductoIdAdmin(admin.ModelAdmin):
#     inlines = [ProductIdInlines]
    

class ProductStockAdmin(admin.ModelAdmin):
    list_display = ('serializador','buy','sold')

class DeliveryAdmin(admin.ModelAdmin):
    list_display = ('client','direction','employee')

class FacturaAdmin(admin.ModelAdmin):
    list_display = ('cliente', 'employee', 'descuento','price','serialDescuento','day')

class FacturaDetalladaAdmin(admin.ModelAdmin):
    list_display = ('serial', 'precio')

class DescuentoAdmin(admin.ModelAdmin):
    list_display = ('tipoDescuento','porcentaje')



#admin.site.register(ProductoId, ProductoIdAdmin)
admin.site.register(Prod_Lista, ProductListAdmin)
admin.site.register(Prod_Stock, ProductStockAdmin)
admin.site.register(Cliente, ClienteAdmin)
# admin.site.register(NominaDept, NominaDeptAdmin)
admin.site.register(NominaDetallada, NominaDetalladaAdmin)
admin.site.register(Delivery, DeliveryAdmin)
admin.site.register(Factura, FacturaAdmin)
admin.site.register(FacturaDetallada, FacturaDetalladaAdmin)
admin.site.register(Descuento, DescuentoAdmin)

# # class EmployeeDetailAdmin (admin.ModelAdmin):
# # list_display=('employee_id','name','department_name','hours','salary','active')

# # admin.site.register(Cliente,ClienteAdmin)
# # admin.site.register(Employee,EmployeeAdmin)
# # admin.site.register(Department,DepartmentAdmin)
# # admin.site.register(EmployeeDetail,EmployeeDetailAdmin)


# # Register your models here.

