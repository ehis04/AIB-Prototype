from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def pay(request):
    return render(request, 'Pay.html')

def transactions(request):
    return render(request, 'transactions.html')

def savings(request):
    return render(request, 'savings.html')

def contact(request):
    return render(request, 'contact.html')

def profile(request):
    return render(request, 'profile.html')

def more(request):
    return render(request, 'more.html')
