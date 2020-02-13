from django.urls import path,include
from  .views import DescuentoDetailView, DescuentoListView

urlpatterns = [
    path('', DescuentoListView.as_view()),
    path('<pk>', DescuentoDetailView.as_view())
]