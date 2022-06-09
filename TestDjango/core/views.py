from django.shortcuts import render

from .forms import petform
from .models import pet

# Create your views here.
def home(request):
    #Accediendo al objeto que contiene la data base
    pets= pet.objects.all()
    #Creando variable que le pase los datos del objeto(pets) al template
    datos = {
        'pets': pets
    }
    #ahora lo agregamos para que se envie al template
    return render(request, 'core/index.html', datos)

def form_pets(request):
        datos = {
            'form': petform()

        }
        if request.method == 'POST':
            formulario = petform(request.POST)
            
            if formulario.is_valid:
                formulario.save()
                datos['message'] = 'Guardado correctamente'
            else:
                datos['message'] = 'Hubo un problema'
    
        return render(request, 'core/form_pets.html',datos)
        