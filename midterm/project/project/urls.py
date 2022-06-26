from django.contrib import admin
from django.urls import path, include
from firstapp import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('home', views.home, name="home2"),
    path('cat', views.cat, name="cat"),
    path('photo', views.photo, name="photo"),
    path('detail<str:id>', views.detail, name="detail"),
    path('new/', views.new, name="new"),
    path('create/', views.create, name="create"),
    path('edit/<str:id>', views.edit, name="edit"),
    path('update/<str:id>', views.update, name="update"),
    path('delete/<str:id>', views.delete, name="delete"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
