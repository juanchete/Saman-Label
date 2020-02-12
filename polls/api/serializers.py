from rest_framework import serializers

from polls.models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['name', 'last_name', 'identification','cedula','telephone']

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model: ProductoId
        fields = ('name')

class ProductoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model: Prod_Lista
        fields = ['kind','name','price']

class ProductStockSerializer(serializers.ModelSerializer):
    class Meta:
        model: Prod_Stock
        fields = ['serializador','buy','sold']

class NominaDeptSerializer(serializers.ModelSerializer):
    class Meta:
        model: NominaDept
        fields = ['department']

class NominaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model: NominaDetallada
        fields = ['cedula','name','price','last_name','salary','department']

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model: Delivery
        fields = ['client','direction','employee']

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model: Factura
        fields = ['cliente','employee','descuento','price']

class FacturaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model: FacturaDetallada
        fields = ['serial','precio']

class DescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model: Descuento
        fields = ['tipoDeDescuento','porcentaje']

