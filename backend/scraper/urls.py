from django.urls import path
from .views import scrape_headlines

urlpatterns = [
    path('scrape/', scrape_headlines),
]
