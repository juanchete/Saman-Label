from rest_framework import viewsets

from polls.models import *
from .serializers import *
from django.db.models import Count
from django.http import JsonResponse

class ProductoViewSet(viewsets.ModelViewSet):
    serializer_class = ProductoListaSerializer
    queryset = Prod_Lista.objects.all()

class ClienteViewSet(viewsets.ModelViewSet):
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()

class CategoriasViewSet(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset= Category.objects.all()

class StockViewSet(viewsets.ModelViewSet):
    serializer_class = ProductStockSerializer
    queryset = Prod_Stock.objects.all()

class NominaDeptViewSet(viewsets.ModelViewSet):
    serializer_class = NominaDeptSerializer
    queryset= NominaDept.objects.all()

class NominaDetalladaViewSet(viewsets.ModelViewSet):
    serializer_class = NominaDetalladaSerializer
    queryset = NominaDetallada.objects.all()

class DeliveryViewSet(viewsets.ModelViewSet):
    serializer_class = DeliverySerializer
    queryset = Delivery.objects.all()

class FacturaViewSet(viewsets.ModelViewSet):
    serializer_class = FacturaSerializer
    queryset = Factura.objects.all()

class FacturaDetalladaViewSet(viewsets.ModelViewSet):
    serializer_class = FacturaDetalladaSerializer
    queryset = FacturaDetallada.objects.all()

class DescuentoViewSet(viewsets.ModelViewSet):
    serializer_class = DescuentoSerializer
    queryset = Descuento.objects.all()

class ListaDescuentoViewSets(viewsets.ModelViewSet):
    serializer_class = ListaDescuentoSerializer
    queryset = ListaDescuentoP.objects.all()

class RecibosViewSets(viewsets.ModelViewSet):
    serializer_class = ReciboSerializer
    queryset = Recibo.objects.all()

class TarjetasViewSets(viewsets.ModelViewSet):
    serializer_class = TarjetasSerializer
    queryset = Tarjetas.objects.all()

def queryChill (request):
    name = []
    cant = []
    q=Prod_Lista.objects.values('category__name').annotate(j=Count('category'))
    for x in q:
        name.append(x['category__name'])
        cant.append(x['j'])
    data = {
        'Name':name,
        'CantProd':cant
    }
    return JsonResponse(data)
    
def queryRecomendaciones (request):
    name = []
    porcentaje = []
    q=ListaDescuentoP.objects.values('serial__name','porcentaje').filter(available=True)

    for x in q:
        name.append(x['serial__name'])
        porcentaje.append(x['porcentaje'])
    
    t=[]
    
    for x in range(len(q)):
        k={'id':x+1 ,'name':name[x], 'porcentaje':porcentaje[x]}
        t.append(k)
    
    data={

        'sds':t
        # 'Name':name,
        # 'porcentaje':porcentaje
    }

    return JsonResponse(data) 

def topProducts (request):
    productos=[]
    cant_prod=[]
    q=FacturaDetallada.objects.values('serial__name').annotate(j=Sum('cantidad'))[:5]

    for x in q:
        productos.append(x['serial__name'])
        cant_prod.append(x['j'])

    t=[]

    for x in range(len(q)):
        k={'id':x+1, 'nombre':productos[x], 'cantidad':cant_prod[x]}
        t.append(k) 
    
    data={

        'productostop':t

    }

    return JsonResponse(data) 

def ProductsVendidos (request):
    productos=[]
    cant_prod=[]

    q=FacturaDetallada.objects.values('serial__name').annotate(j=Sum('cantidad'))

    for x in q:
        productos.append(x['serial__name'])
        cant_prod.append(x['j'])

    t=[]

    for x in range(len(productos) ):
        k={'id':x+1, 'nombre':productos[x], 'cantidad':cant_prod[x]}
        t.append(k) 
    
    dat={

        'productos':t

    }

    return JsonResponse(dat) 

def EmpleadosDelMes (request):

    empleado=[]
    cant_ventas=[]

    q=Factura.objects.values('employee__name').annotate(j=Count('employee'))
    
    for x in q:
        empleado.append(x['employee__name'])
        cant_ventas.append(x['j'])

    t=[]

    for x in range(len(empleado)):
        k={'id':x+1, 'nombre':empleado[x], 'cantidad':cant_ventas[x]}
        t.append(k) 

    data={
        'empleadoDelMes':t
    }

    return JsonResponse(data) 

def empleadoMejoresPagados (request):

    nombre=[]
    salario=[]

    q=NominaDetallada.objects.values('name','salary').filter(available=True)[:5]
    
    for x in q:
        nombre.append(x['name'])
        salario.append(x['salary'])
    
    t=[]

    for x in range(len(nombre)):
        k={'id':x+1, 'nombre':nombre[x], 'cantidad':salario[x]}
        t.append(k)

    data={

        'empleadoMejoresPagados':t
    }

    return JsonResponse(data) 

def trabajadoresJuan (request):

    cedula=[]
    name=[]
    last_name=[]
    salary=[]
    department=[]

    q=NominaDetallada.objects.values('cedula','name','last_name','salary','department__departmentname').filter(name__startswith='J')
    
    for x in q:
        cedula.append(x['cedula'])
        name.append(x['name'])
        last_name.append(x['last_name'])
        salary.append(x['salary'])
        department.append(x['department__departmentname'])
    
    t=[]

    for x in range(len(cedula)):
        k={'id':x+1, 'cedula':cedula[x], 'name':name[x], 'last_name':last_name[x], 'salary':salary[x], 'department':department[x]}
        t.append(k)

    data={
        'juanes':t
    }
    return JsonResponse(data)

# from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, DestroyAPIView, UpdateAPIView

# class DescuentoListView(ListAPIView):
#     queryset=Descuento.objects.all()
#     serializer_class=DescuentoSerializer

# class DescuentoDetailView(RetrieveAPIView):
#     queryset=Descuento.objects.all()
#     serializer_class=DescuentoSerializer

# class DescuentoCreateView(ListCreateAPIView):
#     queryset=Descuento.objects.all()
#     serializer_class=DescuentoSerializer

# class DescuentoDeleteView(DestroyAPIView):
#     queryset=Descuento.objects.all()
#     serializer_class=DescuentoSerializer

# class DescuentoUpdateView(UpdateAPIView):
#     queryset=Descuento.objects.all()
#     serializer_class=DescuentoSerializer

# class ClienteListView(ListAPIView):
#     queryset = Cliente.objects.all()
#     serializer_class=ClienteSerializer

# class ClienteDetailView(RetrieveAPIView):
#     queryset=Cliente.objects.all()
#     serializer_class=ClienteSerializer

# class ClienteCreateView(ListCreateAPIView):
#     queryset=Cliente.objects.all()
#     serializer_class=ClienteSerializer

# class ClienteDeleteView(DestroyAPIView):
#     queryset=Cliente.objects.all()
#     serializer_class=ClienteSerializer

# class ClienteUpdateView(UpdateAPIView):
#     queryset=Cliente.objects.all()
#     serializer_class=ClienteSerializer

# class ProductoListView(ListAPIView):
#     queryset=Prod_Lista.objects.all()
#     serializer_class=ProductoListaSerializer

# class ProductoDetailView(RetrieveAPIView):
#     queryset=Prod_Lista.objects.all()
#     serializer_class=ProductoListaSerializer

# class ProductoCreateView(ListCreateAPIView):
#     queryset=Prod_Lista.objects.all()
#     serializer_class=ProductoListaSerializer

# class ProductoDeleteView(DestroyAPIView):
#     queryset=Prod_Lista.objects.all()
#     serializer_class=ProductoListaSerializer

# class ProductoUpdateView(UpdateAPIView):
#     queryset=Prod_Lista.objects.all()
#     serializer_class=ProductoListaSerializer

# class ProductoStockListView(ListAPIView):
#     queryset=Prod_Stock.objects.all()
#     serializer_class=ProductStockSerializer

# class ProductoStockDetailView(RetrieveAPIView):
#     queryset=Prod_Stock.objects.all()
#     serializer_class=ProductStockSerializer

# class ProductoStockCreateView(ListCreateAPIView):
#     queryset=Prod_Stock.objects.all()
#     serializer_class=ProductStockSerializer

# class ProductoStockDeleteView(DestroyAPIView):
#     queryset=Prod_Stock.objects.all()
#     serializer_class=ProductStockSerializer

# class ProductoStockUpdateView(UpdateAPIView):
#     queryset=Prod_Stock.objects.all()
#     serializer_class=ProductStockSerializer

# class NominaDetalladaListView(ListAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class NominaDetalladaDetailView(RetrieveAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class NominaDetalladaCreateView(ListCreateAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class NominaDetalladaDeleteView(DestroyAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class NominaDetalladaUpdateView(UpdateAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class NominaDetalladaDeleteView(DestroyAPIView):
#     queryset=NominaDetallada.objects.all()
#     serializer_class=NominaDetalladaSerializer

# class DeliveryListView(ListAPIView):
#     queryset=Delivery.objects.all()
#     serializer_class=DeliverySerializer

# class DeliveryDetailView(RetrieveAPIView):
#     queryset=Delivery.objects.all()
#     serializer_class=DeliverySerializer

# class DeliveryCreateView(ListCreateAPIView):
#     queryset=Delivery.objects.all()
#     serializer_class=DeliverySerializer

# class DeliveryUpdateView(UpdateAPIView):
#     queryset=Delivery.objects.all()
#     serializer_class=DeliverySerializer

# class DeliveryDeleteView(DestroyAPIView):
#     queryset=Delivery.objects.all()
#     serializer_class=DeliverySerializer

# class FacturaListView(ListAPIView):
#     queryset=Factura.objects.all()
#     serializer_class=FacturaSerializer

# class FacturaDetailView(RetrieveAPIView):
#     queryset=Factura.objects.all()
#     serializer_class=FacturaSerializer

# class FacturaCreateView(ListCreateAPIView):
#     queryset=Factura.objects.all()
#     serializer_class=FacturaSerializer

# class FacturaDeleteView(DestroyAPIView):
#     queryset=Factura.objects.all()
#     serializer_class=FacturaSerializer

# class FacturaUpdateView(UpdateAPIView):
#     queryset=Factura.objects.all()
#     serializer_class=FacturaSerializer

# class FacturaDetalladaListView(ListAPIView):
#     queryset=FacturaDetallada.objects.all()
#     serializer_class=FacturaDetalladaSerializer

# class FacturaDetalladaDetailView(RetrieveAPIView):
#     queryset=FacturaDetallada.objects.all()
#     serializer_class=FacturaDetalladaSerializer

# class FacturaDetalladaCreateView(ListCreateAPIView):
#     queryset=FacturaDetallada.objects.all()
#     serializer_class=FacturaDetalladaSerializer

# class FacturaDetalladaDeleteView(DestroyAPIView):
#     queryset=FacturaDetallada.objects.all()
#     serializer_class=FacturaDetalladaSerializer

# class FacturaDetalladaUpdateView(UpdateAPIView):
#     queryset=FacturaDetallada.objects.all()
#     serializer_class=FacturaDetalladaSerializer
