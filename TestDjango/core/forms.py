from django import forms
from django.forms import  ModelForm
from .models import pet

class  petform(ModelForm):
        class Meta:
                model = pet
                fields = ['idpet','namepet','agepet','categoria']
                
