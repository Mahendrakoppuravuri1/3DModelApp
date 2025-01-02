from django.http import JsonResponse
from .models import ARModel  # Assuming you have ARModel in models.py

def model_info(request, model_id):
    try:
        model = ARModel.objects.get(modelId=model_id)
        data = {
            'modelId': model.modelId,
            'name': model.name,
            'qrurl': model.qrurl,
            'url': model.url  # This should be the URL to your .glb file
        }
        return JsonResponse(data)
    except ARModel.DoesNotExist:
        return JsonResponse({'error': 'Model not found'}, status=404)
