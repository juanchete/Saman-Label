from rest_framework import serializers
from polls.models import *

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model= Cliente
        fields = ['name', 'last_name','cedula', 'telephone','birthday','id','available','direction']

class ProductoListaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Prod_Lista
        fields = ["id","category","name","price",'available']

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
        fields = ['departmentname','available','id']

class NominaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model= NominaDetallada
        fields = ['cedula','name','last_name','salary','department','available','id']

class DeliverySerializer(serializers.ModelSerializer):
    class Meta:
        model= Delivery
        fields = ['direction','employee','idFactura']

class FacturaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Factura
        fields = ['id','cliente','employee','price','serialDescuento','day']

class FacturaDetalladaSerializer(serializers.ModelSerializer):
    class Meta:
        model= FacturaDetallada
        fields = ['factura','serial','precioI','precioF','cantidad']

class DescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model= Descuento
        fields = ['tipoDescuento','porcentaje','id','available']
    
class ListaDescuentoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ListaDescuentoP
        fields = ['id','serial','porcentaje','available']

class ReciboSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recibo
        fields = ['factura','Instrumentos','Monto', 'id']

class TarjetasSerializer(serializers.ModelSerializer):
        # class Meta:
        #     model = Tarjetas
        #     fields = ['id','idPago','noTarjeta','CVV','banco','cedula','vencimiento']        
    class Meta:
        model = Tarjetas
        fields = ['idPago','noTarjeta','CVV','banco','cedula','vencimiento']        
