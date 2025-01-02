from django.urls import path
from . import views

urlpatterns = [
    path('arinfo/<int:model_id>/', views.model_info, name='model_info'),
]
