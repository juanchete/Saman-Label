from rest_framework.generics import ListAPIView, RetrieveAPIView
from polls.models import Descuento
from .serializers import DescuentoSerializer

class DescuentoListView(ListAPIView):
    queryset=Descuento.objects.all()
    serializer_class=DescuentoSerializer

class DescuentoDetailView(RetrieveAPIView):
    queryset=Descuento.objects.all()
    serializer_class=DescuentoSerializer