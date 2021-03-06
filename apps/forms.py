from django import forms
from apps.models import *


class ReqForm(forms.ModelForm):
    class Meta:
        model = ReqApp
        fields = ('device_type', 'address', 'max_power', 'reliasbility_lvl', 'voltage_lvl', 'reason', 'points_count', 'load_type')
        widgets = {
            'device_type': forms.RadioSelect(attrs={'class': 'custom-control-input'}),
            'address': forms.TextInput(attrs={'class': 'form-control'}),
            'max_power': forms.TextInput(attrs={'class': 'form-control'}),
            'reliasbility_lvl': forms.RadioSelect(attrs={'class': 'custom-control-input'}),
            'voltage_lvl': forms.RadioSelect(attrs={'class': 'custom-control-input'}),
            'reason': forms.RadioSelect(attrs={'class': 'custom-control-input'}),
            'points_count': forms.Textarea(attrs={'class': 'form-control', 'rows': 4}),
            'load_type': forms.Textarea(attrs={'class': 'form-control', 'rows': 4}),
        }


class ChatForm(forms.ModelForm):
    class Meta:
        model = ChatMessage
        fields = ('text',)
        widgets = {
            'text': forms.Textarea(attrs={'class': 'form-control', 'rows': 3, 'placeholder': 'Текст обращения'}),
        }