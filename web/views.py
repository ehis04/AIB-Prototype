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

def cards(request):
    return render(request, 'cards.html')
