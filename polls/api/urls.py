from polls.api.views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'productos', ProductoViewSet, basename='Productos')
router.register (r'clientes', ClienteViewSet, basename='Clientes')
router.register (r'categorias', CategoriasViewSet, basename='Categorias')
router.register(r'stock', StockViewSet, basename='Stock')
router.register(r'nominaDetallada', NominaDetalladaViewSet, basename='NominaDetallada')
router.register(r'nominaDept', NominaDeptViewSet, basename='NominaDept')
router.register(r'delivery', DeliveryViewSet, basename='Delivery')
router.register(r'factura', FacturaViewSet, basename='Factura')
router.register(r'facturaDetallada', FacturaDetalladaViewSet, basename='FacturaDetallada')
router.register(r'descuento', DescuentoViewSet, basename='Descuento')
router.register(r'listaDescuento', ListaDescuentoViewSets, basename='ListaDescuento')
router.register(r'recibos', RecibosViewSets, basename='Recibo')
router.register(r'tarjetas', TarjetasViewSets, basename='Tarjetas')


urlpatterns = router.urls

# from django.urls import path, include
# from  .views import  *

# urlpatterns = [
#     path('descuento/', DescuentoListView.as_view()),
#     path('descuento/create/', DescuentoCreateView.as_view()),
#     path('descuento/<pk>/delete/', DescuentoDeleteView.as_view()),
#     path('descuento/<pk>/update/', DescuentoUpdateView.as_view()),
#     path('descuento/<pk>', DescuentoDetailView.as_view()),
#     path('cliente/', ClienteListView.as_view()),
#     path('cliente/create/', ClienteCreateView.as_view()),
#     path('cliente/<pk>/delete/', ClienteDeleteView.as_view()),
#     path('cliente/<pk>/update/', ClienteUpdateView.as_view()),
#     path('cliente/<pk>', ClienteDetailView.as_view()),
#     path('productos', ProductoListView.as_view()),
#     path('productos/create/', ProductoCreateView.as_view()),
#     path('productos/<pk>/delete/', ProductoDeleteView.as_view()),
#     path('productos/<pk>/update/', ProductoUpdateView.as_view()),
#     path('productos/<pk>', ProductoDetailView.as_view()),
#     path('producto_stock', ProductoStockListView.as_view()),
#     path('producto_stock/create/', ProductoStockCreateView.as_view()),
#     path('producto_stock/<pk>/delete/', ProductoStockDeleteView.as_view()),
#     path('producto_stock/<pk>/update/', ProductoStockUpdateView.as_view()),
#     path('producto_stock/<pk>', ProductoStockDetailView.as_view()),
#     path('nomina_detallada', NominaDetalladaListView.as_view()),
#     path('nomina_detallada/create/', NominaDetalladaCreateView.as_view()),
#     path('nomina_detallada/<pk>/delete/', NominaDetalladaDeleteView.as_view()),
#     path('nomina_detallada/<pk>/update/', NominaDetalladaUpdateView.as_view()),
#     path('nomina_detallada/<pk>', NominaDetalladaDetailView.as_view()),
#     path('delivery', DeliveryListView.as_view()),
#     path('delivery/create/', DeliveryCreateView.as_view()),
#     path('delivery/delete/', DeliveryDeleteView.as_view()),
#     path('delivery/update/', DeliveryUpdateView.as_view()),
#     path('delivery/<pk>', DeliveryDetailView.as_view()),
#     path('factura', FacturaListView.as_view()),
#     path('factura/create/', FacturaCreateView.as_view()),
#     path('factura/delete/', FacturaDeleteView.as_view()),
#     path('factura/update/', FacturaUpdateView.as_view()),
#     path('factura/<pk>', FacturaDetailView.as_view()),
#     path('factura_detallada', FacturaDetalladaListView.as_view()),
#     path('factura_detallada/create/', FacturaDetalladaCreateView.as_view()),
#     path('factura_detallada/delete/', FacturaDetalladaDeleteView.as_view()),
#     path('factura_detallada/update/', FacturaDetalladaUpdateView.as_view()),
#     path('factura_detallada/<pk>', FacturaDetalladaDetailView.as_view()),
    
# ]
