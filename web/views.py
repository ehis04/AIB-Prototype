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

def back(request):
    return render(request, 'back.html')
def cards(request):
    return render(request, 'cards.html')

def account(request):
    return render(request, 'account.html')

def pay(request):
    return render(request, 'pay.html')

def statements(request):
    return render(request, 'statements.html')