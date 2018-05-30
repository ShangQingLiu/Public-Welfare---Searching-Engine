from django.shortcuts import render

# Create your views here.
def index(request):
    testArray = [1,2,3];
    data = {
        'title':'我是title',
        'array':testArray
    }
    return render(request,'index.html',data)

