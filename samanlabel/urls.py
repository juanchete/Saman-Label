
from django.contrib import admin
from django.urls import include,path

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('polls/', include('polls.urls')),
    path('admin/', admin.site.urls),
    path('api/',include('polls.api.urls'))
]
