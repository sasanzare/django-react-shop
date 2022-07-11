from statistics import mode
from xml.parsers.expat import model
from rest_framework import serializers

from .models import Category

class CategorySerializer(serializers.Serializer):
    class Meta:
        model = Category
        feild = ('name' , 'description')

        