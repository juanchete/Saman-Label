from django.contrib import admin
from .models import Cliente,ProductoId,Prod_Lista,Prod_Stock,NominaDept,NominaDetallada,Delivery,Factura,FacturaDetallada,Descuento

class ClienteAdmin(admin.ModelAdmin):
    list_display=('name', 'cedula')

class EmployeeAdmin(admin.ModelAdmin):
    list_display=('id','cedula','name','last_name','department','salary')
    

    

class DepartmentAdmin(admin.ModelAdmin):
    list_display=('id','department')

# class EmployeeDetailAdmin (admin.ModelAdmin):
#     list_display=('employee_id','name','department_name','hours','salary','active')

    
admin.site.register(Cliente,ClienteAdmin)
admin.site.register(NominaDetallada,EmployeeAdmin)
admin.site.register(NominaDept,DepartmentAdmin)
# admin.site.register(EmployeeDetail,EmployeeDetailAdmin)


# Register your models here.

