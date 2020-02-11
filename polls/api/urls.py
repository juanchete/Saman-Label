from django.urls import path

from views import ClienteListView,ClienteDetailView

urlpatterns = [
    path('',ClienteListView.as_view()),
    path('<pk>',ClienteDetailView)
    

]