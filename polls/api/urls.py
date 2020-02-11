from .views import ClienteListView, CleinteDetailView

from django.urls import path

urlpatterns = [
    path('',ClienteListView.as_view())
    path('<pk>',ClienteDetailView.as_view()),

]