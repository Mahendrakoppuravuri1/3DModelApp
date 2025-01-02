from django.shortcuts import render

def arinfo(request, modelId):
    """
    View to handle the 'arinfo' page for the given modelId.
    """
    # You can do any processing with the modelId here
    context = {
        'modelId': modelId,  # Pass modelId to the template
    }
    
    return render(request, 'arinfo_template.html', context)  # 'arinfo_template.html' is your template file

from django.shortcuts import render

def home(request):
    """
    View to render the home page.
    """
    return render(request, 'home.html')  # Render the home page template
