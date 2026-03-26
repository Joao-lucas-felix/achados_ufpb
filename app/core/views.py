from django.shortcuts import render, redirect
from django.contrib.auth import login
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.urls import reverse_lazy
from .forms import RegisterForm
from .models import Post


# Create your views here.
def home(request):
    return render(request=request,
                  template_name='core/home.html')

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')
    else:
        form = RegisterForm()

    return render(request, 'core/register.html', {'form': form})

class PostListView(ListView): 
    model = Post
    template_name = 'core/post_list.html'
    context_object_name = 'posts'
    ordering = ['-criado_em']

class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    fields = ['titulo', 'descricao', 'imagem', 'local_encontrado']
    template_name = 'core/post_form.html'
    success_url = reverse_lazy('posts')

    def form_valid(self, form):
        form.instance.autor = self.request.user  
        return super().form_valid(form)
    
class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    fields = ['titulo', 'descricao', 'imagem', 'local_encontrado']
    template_name = 'core/post_form.html'
    success_url = reverse_lazy('posts')

    def test_func(self):
        post = self.get_object()
        if not post.autor: # type: ignore
            return False
        return self.request.user == post.autor # type: ignore
    
class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = 'core/post_confirm_delete.html'
    success_url = reverse_lazy('posts')

    def test_func(self):
        post = self.get_object()
        if not post.autor: # type: ignore
            return False
        return self.request.user == post.autor # type: ignore

