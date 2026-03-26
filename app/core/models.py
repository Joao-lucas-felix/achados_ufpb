from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
    titulo = models.CharField(max_length=200)
    descricao = models.TextField(null=True, blank=True)
    imagem = models.ImageField(upload_to='posts/%Y/%m/%d/')
    local_encontrado = models.CharField(max_length=255, blank=True, null=True)

    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    criado_em = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.titulo
