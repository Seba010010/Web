from django.urls import path
from .views import index, index2, index3, index4

urlpatterns =[
    path('',index,name="index"),
    path('Sobre Nosotros',index2,name="index2"),
    path('Tienda',index3,name="index3"),
    path('Contacto',index4,name="index4"),

]