from django.shortcuts import render
from . models import Post

def homepage(request):
    context = {
        "title":"Home",
        "posts": Post.objects.all()
    }
    return render(request, 'blog/homepage.htm', context)

def aboutpage(request):
    return render(request, 'blog/aboutpage.htm', {"title":"About Page"})