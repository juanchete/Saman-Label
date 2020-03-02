from django.db import models


# Tablas de Productos

class Category(models.Model):
    name = models.CharField(max_length=60)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Prod_Lista(models.Model):
    name = models.CharField(max_length=20)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    price = models.IntegerField()
    discount = models.IntegerField(default=0)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Prod_Stock(models.Model):
    serializador = models.ForeignKey(Prod_Lista, on_delete=models.CASCADE)
    buy = models.IntegerField()
    sold = models.IntegerField()
   # def __str__(self):
    #    return self.name


# Tablas de Cliente

class Cliente(models.Model):
    name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=50)
    cedula = models.IntegerField()
    telephone = models.BigIntegerField(null=True)
    birthday = models.DateField(default='1999-05-10')
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

# Tablas de Nomina de Trabajadores


class NominaDept (models.Model):
    departmentname = models.CharField(max_length=20)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.departmentname


class NominaDetallada(models.Model):
    cedula = models.IntegerField()
    name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
    salary = models.IntegerField()
    department = models.ForeignKey(NominaDept, on_delete=models.CASCADE)
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.name

# Tabla de Delivery


class Delivery (models.Model):
    client = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    direction = models.CharField(max_length=50)
    employee = models.ForeignKey(NominaDetallada, on_delete=models.CASCADE)
    # time = models.TimeField(default='')
    # def __str__(self):
    #     return self.name
    # Factura


class Descuento (models.Model):
    tipoDescuento = models.CharField(max_length=20)
    porcentaje = models.IntegerField()


class ListaDescuento(models.Model):
    serial = models.ForeignKey(Prod_Stock, on_delete=models.CASCADE, default='')
    available = models.BooleanField(default=True)
    porcentaje = models.IntegerField()


class Factura (models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    employee = models.ForeignKey(NominaDetallada, on_delete=models.CASCADE)
    descuento = models.BooleanField(default=False)
    price = models.IntegerField()
    serialDescuento = models.ForeignKey(
        Descuento, on_delete=models.CASCADE, default='')
    day = models.DateField(default='1965-05-02')
    # time = models.TimeField( default='' )
    # def __str__(self):
    # return self.name


class FacturaDetallada (models.Model):
    serial = models.ForeignKey(Factura, on_delete=models.CASCADE)
    precio = models.IntegerField()

    # def __str__(self):
    #     return self.name
