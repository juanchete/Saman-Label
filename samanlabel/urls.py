from django.contrib import admin
from django.urls import include, path
from polls.api.views import queryChill,queryRecomendaciones,topProducts,ProductsVendidos,EmpleadosDelMes,empleadoMejoresPagados,trabajadoresJuan

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    path('query/chill',queryChill),
    path('query/recomendaciones',queryRecomendaciones),
    path('query/productos-top',topProducts),
    path('query/productos-vendidos',ProductsVendidos),
    path('query/empleado-mes',EmpleadosDelMes),
    path('query/empleado-mejores-pagados',empleadoMejoresPagados),
    path('query/empleado-juan',trabajadoresJuan),
    #REST FRAMEWORK
    path('api/',include('polls.api.urls')),

]
