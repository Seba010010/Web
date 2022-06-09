from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'core/index.html')

def index2(request):
    return render(request,'core/index2.html')

def index3(request):
    return render(request,'core/index3.html')

def index4(request):
    return render(request,'core/index4.html')