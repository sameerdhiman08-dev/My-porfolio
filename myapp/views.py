from django.shortcuts import render
from .models import Contact

def home(request):
    success = False
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')

        Contact.objects.create(name=name, email=email, message=message)
        success = True

    return render(request, 'home.html', {'success': success})
