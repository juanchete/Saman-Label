from rest_framework.generics import ListAPIView, RetrieveAPIView
from polls.models import *
from .serializers import *

class DescuentoListView(ListAPIView):
    queryset=Descuento.objects.all()
    serializer_class=DescuentoSerializer

class DescuentoDetailView(RetrieveAPIView):
    queryset=Descuento.objects.all()
    serializer_class=DescuentoSerializer

class ClienteListView(ListAPIView):
    queryset = Cliente.objects.all()
    serializer_class=ClienteSerializer

class ClienteDetailView(RetrieveAPIView):
    queryset=Cliente.objects.all()
    serializer_class=ClienteSerializer

class ProductoListView(ListAPIView):
    queryset=Prod_Lista.objects.all()
    serializer_class=ProductoListaSerializer

class ProductoDetailView(RetrieveAPIView):
    queryset=Prod_Lista.objects.all()
    serializer_class=ProductoListaSerializer

class ProductoStockListView(ListAPIView):
    queryset=Prod_Stock.objects.all()
    serializer_class=ProductStockSerializer

class ProductoStockDetailView(RetrieveAPIView):
    queryset=Prod_Stock.objects.all()
    serializer_class=ProductStockSerializer

class NominaDetalladaListView(ListAPIView):
    queryset=NominaDetallada.objects.all()
    serializer_class=NominaDetalladaSerializer

class NominaDetalladaDetailView(RetrieveAPIView):
    queryset=NominaDetallada.objects.all()
    serializer_class=NominaDetalladaSerializer

class DeliveryListView(ListAPIView):
    queryset=Delivery.objects.all()
    serializer_class=DeliverySerializer

class DeliveryDetailView(RetrieveAPIView):
    queryset=Delivery.objects.all()
    serializer_class=DeliverySerializer

class FacturaListView(ListAPIView):
    queryset=Factura.objects.all()
    serializer_class=FacturaSerializer

class FacturaDetailView(RetrieveAPIView):
    queryset=Factura.objects.all()
    serializer_class=FacturaSerializer

class FacturaDetalladaListView(ListAPIView):
    queryset=FacturaDetallada.objects.all()
    serializer_class=FacturaDetalladaSerializer

class FacturaDetalladaDetailView(RetrieveAPIView):
    queryset=FacturaDetallada.objects.all()
    serializer_class=FacturaDetalladaSerializer

