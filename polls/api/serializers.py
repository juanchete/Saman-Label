from rest_framework import serializers
from polls.models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cliente
        fields = ['name', 'last_name','cedula', 'telephone','birthday','id','available']

class ProductoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Prod_Lista
        fields = ["id","category","name","price","discount",'available']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name","id",'available']

class ProductStockSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prod_Stock
        fields = ['serializador','buy','sold']

class NominaDeptSerializer(serializers.ModelSerializer):
    class Meta:
        model= NominaDept
        fields = ['departmentname','available']

class NominaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model= NominaDetallada
        fields = ['cedula','name','last_name','salary','department','available','id']

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
        fields = ['tipoDescuento','porcentaje','id']
    
class ListaDescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListaDescuento
        fields = ['serial','porcentaje','available']