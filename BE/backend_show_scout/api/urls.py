from django.urls import path, include
from django.contrib import admin
from .views import AgregarUserDataView, UserDataListCreateView, UserDataDetailView,CompanyDataListCreateView, CompanyDataDetailView, OrganizationDataListCreateView, OrganizationDataDetailView, UserCompanyDataListCreateView,UserCompanyDataDetailView,UserOrganizationDataListCreateView, UserOrganizationDataDetailView
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path("crear-usuario/", AgregarUserDataView.as_view()),
    path('userData/', UserDataListCreateView.as_view(), name='user-list-create'),
    path('userData/<int:pk>/', UserDataDetailView.as_view(), name='user-edit-update'),
    path('companyData/', CompanyDataListCreateView.as_view(), name='user-list-create'),
    path('companyData/<int:pk>/', CompanyDataDetailView.as_view(), name='user-edit-update'),
    path('organizationData/', OrganizationDataListCreateView.as_view(), name='user-list-create'),
    path('organizationData/<int:pk>/', OrganizationDataDetailView.as_view(), name='user-edit-update'),
    path('userCompanyData/', UserCompanyDataListCreateView.as_view(), name='user-list-create'),
    path('userCompanyData/<int:pk>/', UserCompanyDataDetailView.as_view(), name='user-edit-update'),
    path('userOrganizationData/', UserOrganizationDataListCreateView.as_view(), name='user-list-create'),
    path('userOrganizationData/<int:pk>/', UserOrganizationDataDetailView.as_view(), name='user-edit-update'),
]