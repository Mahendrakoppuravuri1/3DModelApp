from django.db import models

class ARModel(models.Model):
    modelId = models.CharField(max_length=100, unique=True, primary_key=True)
    name = models.CharField(max_length=255)
    qrurl = models.URLField()
    url = models.URLField()
