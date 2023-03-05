from django.shortcuts import render

def home(request):
    return render(request, 'ro/pages/home.html')