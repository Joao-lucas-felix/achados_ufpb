from django import forms
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth.models import User

from .models import Post


TEXT_INPUT = (
    "w-full rounded-2xl border border-white/10 bg-[#211712]/80 px-4 py-3 text-sm text-[#fff8f2] "
    "outline-none transition placeholder:text-[#bbaea2] focus:border-[#f4c95d] "
    "focus:ring-4 focus:ring-[#f4c95d]/15"
)

TEXTAREA_INPUT = (
    "w-full min-h-24 rounded-2xl border border-white/10 bg-[#211712]/80 px-4 py-3 text-sm text-[#fff8f2] "
    "outline-none transition placeholder:text-[#bbaea2] focus:border-[#f4c95d] "
    "focus:ring-4 focus:ring-[#f4c95d]/15"
)

FILE_INPUT = (
    "block w-full text-sm text-[#e2d8cc] file:mr-4 file:rounded-full file:border-0 "
    "file:bg-[#f4c95d] file:px-4 file:py-2.5 file:font-semibold file:text-[#201511] "
    "hover:file:bg-[#efb94c]"
)


class LoginForm(AuthenticationForm):
    username = forms.CharField(
        label="Usuario",
        widget=forms.TextInput(
            attrs={
                "class": TEXT_INPUT,
                "placeholder": "Seu usuario",
                "autofocus": True,
            }
        ),
    )
    password = forms.CharField(
        label="Senha",
        strip=False,
        widget=forms.PasswordInput(
            attrs={
                "class": TEXT_INPUT,
                "placeholder": "Sua senha",
            }
        ),
    )


class RegisterForm(UserCreationForm):
    email = forms.EmailField(
        required=True,
        label="Email",
        widget=forms.EmailInput(
            attrs={
                "class": TEXT_INPUT,
                "placeholder": "nome@ufpb.br",
            }
        ),
    )

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2"]

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["username"].label = "Usuario"
        self.fields["username"].widget.attrs.update(
            {"class": TEXT_INPUT, "placeholder": "Usuario interno"}
        )
        self.fields["password1"].label = "Senha"
        self.fields["password1"].widget.attrs.update(
            {"class": TEXT_INPUT, "placeholder": "Defina uma senha"}
        )
        self.fields["password2"].label = "Confirmacao"
        self.fields["password2"].widget.attrs.update(
            {"class": TEXT_INPUT, "placeholder": "Repita a senha"}
        )

        for field_name in ["username", "password1", "password2"]:
            self.fields[field_name].help_text = ""


class PostForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ["imagem", "titulo", "local_encontrado", "descricao"]
        labels = {
            "imagem": "Foto",
            "titulo": "Item",
            "local_encontrado": "Local",
            "descricao": "Obs",
        }
        widgets = {
            "imagem": forms.ClearableFileInput(
                attrs={
                    "class": FILE_INPUT,
                    "accept": "image/*",
                }
            ),
            "titulo": forms.TextInput(
                attrs={
                    "class": TEXT_INPUT,
                    "placeholder": "Ex.: Carteira preta",
                }
            ),
            "local_encontrado": forms.TextInput(
                attrs={
                    "class": TEXT_INPUT,
                    "placeholder": "Ex.: Bloco A",
                }
            ),
            "descricao": forms.Textarea(
                attrs={
                    "class": TEXTAREA_INPUT,
                    "placeholder": "Cor, marca ou detalhe util",
                    "rows": 3,
                }
            ),
        }

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["descricao"].required = False
        self.fields["descricao"].help_text = ""
        self.fields["local_encontrado"].help_text = ""
