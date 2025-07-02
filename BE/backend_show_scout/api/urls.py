from django.urls import path, include
from django.contrib import admin
from .views import AgregarUserDataView, UserDataListCreateView, UserDataDetailView,CompanyDataListCreateView, CompanyDataDetailView, OrganizationDataListCreateView, OrganizationDataDetailView, UserCompanyDataListCreateView,UserCompanyDataDetailView,UserOrganizationDataListCreateView, UserOrganizationDataDetailView,LoginViewSet, PiecesDataListCreateView, PiecesDataDetailView, BudgetIncomeDataListCreateView, BudgetIncomeDataDetailView, BudgetExpenseDataListCreateView, BudgetExpenseDataDetailView
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("crear-usuario/", AgregarUserDataView.as_view()),
    path("validar-usuario/", LoginViewSet.as_view()),
    path('userData/', UserDataListCreateView.as_view(), name='user-list-create'),
    path('userData/<int:id>/', UserDataDetailView.as_view(), name='user-edit-update'),
    path('companyData/', CompanyDataListCreateView.as_view(), name='user-list-create'),
    path('companyData/<int:pk>/', CompanyDataDetailView.as_view(), name='user-edit-update'),
    path('organizationData/', OrganizationDataListCreateView.as_view(), name='user-list-create'),
    path('organizationData/<int:pk>/', OrganizationDataDetailView.as_view(), name='user-edit-update'),
    path('userCompanyData/', UserCompanyDataListCreateView.as_view(), name='user-list-create'),
    path('userCompanyData/<int:pk>/', UserCompanyDataDetailView.as_view(), name='user-edit-update'),
    path('userOrganizationData/', UserOrganizationDataListCreateView.as_view(), name='user-list-create'),
    path('userOrganizationData/<int:pk>/', UserOrganizationDataDetailView.as_view(), name='user-edit-update'),
    path('piecesData/', PiecesDataListCreateView.as_view(), name='user-list-create'),
    path('piecesData/<int:id>/', PiecesDataDetailView.as_view(), name='user-edit-update'),
    path('budgetIncomeData/', BudgetIncomeDataListCreateView.as_view(), name='user-list-create'),
    path('budgetIncomeData/<int:id>/', BudgetIncomeDataDetailView.as_view(), name='user-edit-update'),
    path('budgetExpenseData/', BudgetExpenseDataListCreateView.as_view(), name='user-list-create'),
    path('budgetExpenseData/<int:id>/', BudgetExpenseDataDetailView.as_view(), name='user-edit-update'),
    path('api/create-profile/', AgregarUserDataView.as_view(), name='create_profile'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

