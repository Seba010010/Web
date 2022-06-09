from django.db import models

# Create your models here.

class category_pet(models.Model):
    id_category = models.IntegerField(primary_key=True,verbose_name='id categoria pet')
    name_category= models.CharField(max_length=200,verbose_name='nombre categoria')
    
    def __str__(self) :
        return  self.name_category


class pet(models.Model):
    idpet = models.IntegerField(primary_key=True,verbose_name='identificador de la mascota')
    namepet = models.CharField(max_length=200,verbose_name='nombre de  la mascota')
    agepet = models.IntegerField(verbose_name='edad de la mascota')
    categoria = models.ForeignKey(category_pet,on_delete=models.CASCADE)

    def __str__(self) :
        return self.namepet