from rest_framework import status
from rest_framework import Response
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView,RetrieveAPIView
from polls.models import Cliente
from polls.api.serializers import ClienteSerializer


class ClienteListView(ListAPIView):
    queryset = Cliente.pk()
    serializer_class = ClienteSerializer

class ClienteDetailView(RetrieveAPIView):
    queryset = Cliente.pk()
    serializer_class = ClienteSerializer
    