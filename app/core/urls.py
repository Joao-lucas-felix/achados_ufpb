from django.urls import path
from .views import  home ,register_view, PostListView, PostCreateView, PostUpdateView, PostDeleteView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', home, name='home'),
    path('posts/', PostListView.as_view(), name='posts'),
    path('post/novo/', PostCreateView.as_view(), name='post-create'),
    path('post/<int:pk>/editar/', PostUpdateView.as_view(), name='post-update'),
    path('post/<int:pk>/deletar/', PostDeleteView.as_view(), name='post-delete'),

    path('login/', auth_views.LoginView.as_view(
        template_name='core/login.html'
    ), name='login'),

    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    
    path('register/', register_view, name='register'),
]