#from rest_framework import status
#from rest_framework import Response
#from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView
from polls.models import Prod_Lista,ProductoId
from polls.api.serializers import *


class Prod_ListaListView(ListAPIView):
    queryset = Prod_Lista.objects.all()
    serializer_class = ProductoListaSerializer

class Prod_ListaDetailView(RetrieveAPIView):
    queryset = Prod_Lista.objects.all()
    serializer_class = ProductoListaSerializer
    