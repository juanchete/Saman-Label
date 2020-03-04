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
    q=Prod_Lista.objects.values('category').annotate(j=Count('category'))
    for x in q:
        name.append(x['category'])
        cant.append(x['j'])
    data = {
        'Name':name,
        'CantProd':cant
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
