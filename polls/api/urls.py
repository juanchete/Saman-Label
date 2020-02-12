from django.urls import path

from .views import Prod_ListaListView, Prod_ListaDetailView

urlpatterns = [
    path('', Prod_ListaListView.as_view()),
    path('<pk>', Prod_ListaDetailView.as_view()) ,
]