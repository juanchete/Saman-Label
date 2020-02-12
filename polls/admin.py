from django.contrib import admin
#from .models import Cliente, Employee ,Department

class ClienteAdmin(admin.ModelAdmin):
    list_display=('name', 'identification')

class EmployeeAdmin(admin.ModelAdmin):
    list_display=('id','employee_id','name','last_name','department_name','hours','salary','active')

class DepartmentAdmin(admin.ModelAdmin):
    list_display=('id','departmen_name')

# class EmployeeDetailAdmin (admin.ModelAdmin):
#     list_display=('employee_id','name','department_name','hours','salary','active')

    
#admin.site.register(Cliente,ClienteAdmin)
#admin.site.register(Employee,EmployeeAdmin)
#admin.site.register(Department,DepartmentAdmin)
# admin.site.register(EmployeeDetail,EmployeeDetailAdmin)


# Register your models here.

