from django.urls import path,include
from  .views import DescuentoDetailView, DescuentoListView,ProductoListView,ProductoDetailView

urlpatterns = [
    path('descuento', DescuentoListView.as_view()),
    path('descuento/<pk>', DescuentoDetailView.as_view()),
    path('productos', ProductoListView.as_view()),
    path('productos/<pk>',ProductoDetailView.as_view()),
]