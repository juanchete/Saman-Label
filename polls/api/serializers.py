from rest_framework import serializers

from polls.models import Cliente

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = ['name', 'last_name', 'identification']