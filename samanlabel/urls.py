from django.contrib import admin
from django.urls import include, path
from polls.api.views import queryChill

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    
    #REST FRAMEWORK
    path('api/',include('polls.api.urls')),
    path('query/', queryChill)


]
