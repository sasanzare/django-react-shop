from rest_framework import viewsets

from .serializers import CategorySerializer
from .models import Category
from api.category import serializers

# Create your views here.

class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all().order_by('name')
    serializer_class = CategorySerializer