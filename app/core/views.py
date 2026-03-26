from django.contrib.auth import login
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.shortcuts import redirect, render
from django.urls import reverse_lazy
from django.views.generic import CreateView, DeleteView, ListView, UpdateView

from .forms import PostForm, RegisterForm
from .models import Post


def home(request):
    latest_posts = Post.objects.order_by("-criado_em")[:3]
    return render(
        request=request,
        template_name="core/home.html",
        context={"latest_posts": latest_posts},
    )


def register_view(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("/")
    else:
        form = RegisterForm()

    return render(request, "core/register.html", {"form": form})


class PostListView(ListView):
    model = Post
    template_name = "core/post_list.html"
    context_object_name = "posts"
    ordering = ["-criado_em"]


class PostCreateView(LoginRequiredMixin, CreateView):
    model = Post
    form_class = PostForm
    template_name = "core/post_form.html"
    success_url = reverse_lazy("posts")

    def form_valid(self, form):
        form.instance.autor = self.request.user
        return super().form_valid(form)


class PostUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Post
    form_class = PostForm
    template_name = "core/post_form.html"
    success_url = reverse_lazy("posts")

    def test_func(self):
        post = self.get_object()
        if not post.autor:  # type: ignore
            return False
        return self.request.user == post.autor  # type: ignore


class PostDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Post
    template_name = "core/post_confirm_delete.html"
    success_url = reverse_lazy("posts")

    def test_func(self):
        post = self.get_object()
        if not post.autor:  # type: ignore
            return False
        return self.request.user == post.autor  # type: ignore
