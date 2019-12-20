from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('users', views.UserViewSet)


urlpatterns = [
    path('login/', views.UserLoginApiView.as_view()),
    path('', include(router.urls))
]
