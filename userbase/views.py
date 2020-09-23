from django.shortcuts import render, redirect
from django.contrib import messages
from . forms import UserRegistrationForm

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)    
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('userbase-login')

    else:
        form = UserRegistrationForm(request.GET )
    return render(request, 'userbase/register.htm', {'form':form, "title":"Register"})  