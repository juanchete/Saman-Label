from rest_framework import serializers
from polls.models import Cliente,Prod_Lista,Prod_Stock,NominaDept,NominaDetallada,Delivery,Descuento,Factura,FacturaDetallada

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cliente
        fields = ['name', 'last_name','cedula', 'telephone','birthday']

class ProductoListaSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=False, read_only=True)
    class Meta:
        model= Prod_Lista
        fields = ['id','category','name','price','discount']

class ProductStockSerializer(serializers.ModelSerializer):
    class Meta:
        model= Prod_Stock
        fields = ['serializador','buy','sold']

class NominaDeptSerializer(serializers.ModelSerializer):
    class Meta:
        model= NominaDept
        fields = ('department')

class NominaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model= NominaDetallada
        fields = ['cedula','name','last_name','salary','department']

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model= Delivery
        fields = ['client','direction','employee']

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Factura
        fields = ['cliente','employee','descuento','price','serialDescuento','day']

class FacturaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model= FacturaDetallada
        fields = ['serial','precio']

class DescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Descuento
        fields = ['tipoDescuento','porcentaje']