from django.urls import path,include


urlpatterns = [
    #path('', views.index, name='index'),
    path('api/', include('polls.api.urls')),
    path('api-auth/',include('rest_framework.urls'))
]