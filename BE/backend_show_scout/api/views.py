from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData
from .serializers import UserDataSerializer, CompanyDataSerializer, OrganizationDataSerializer, UserCompanyDataSerializer, UserOrganizationDataSerializer
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission

class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.group.filter(name = 'admin').exists()
    

class AgregarUserDataView(APIView):
    def post(self,request):
        username = request.data.get("username")
        password_user = request.data.get("password")
        email = request.data.get("email")
        first_name = request.data.get("first_name")
        last_name = request.data.get("last_name")
        
        address_user = request.data.get("direccion")
        user_age = request.data.get("user_age")
        user_phone = request.data.get("user_phone")
        user_type_profile = request.data.get("user_type_profile")
        user_country = request.data.get("user_country")
        
        user = User.objects.create_user(
            username=username,
            password=password_user,
            email=email,
            first_name=first_name,
            last_name=last_name
            )
    
        UserData.objects.create(
            user = user,
            user_country = user_country,
            address_user = address_user,
            user_age = user_age,
            user_phone = user_phone,
            user_type_profile = user_type_profile
        )
        
        return Response({
            "message":"Usuario creado correctamente"
        })

class UserDataListCreateView(ListCreateAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer 
    
class UserDataDetailView(RetrieveUpdateDestroyAPIView):
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    
class CompanyDataListCreateView(ListCreateAPIView):
    queryset = CompanyData.objects.all()
    serializer_class = CompanyDataSerializer 

class CompanyDataDetailView(RetrieveUpdateDestroyAPIView):
    queryset = CompanyData.objects.all()
    serializer_class = CompanyDataSerializer
    
class OrganizationDataListCreateView(ListCreateAPIView):
    queryset = OrganizationData.objects.all()
    serializer_class = OrganizationDataSerializer 
    
class OrganizationDataDetailView(RetrieveUpdateDestroyAPIView):
    queryset = OrganizationData.objects.all()
    serializer_class = OrganizationDataSerializer
    
class UserCompanyDataListCreateView(ListCreateAPIView):
    queryset = UserCompanyData.objects.all()
    serializer_class = UserCompanyDataSerializer 
    
class UserCompanyDataDetailView(RetrieveUpdateDestroyAPIView):
    queryset = UserCompanyData.objects.all()
    serializer_class = UserCompanyDataSerializer
    
class UserOrganizationDataListCreateView(ListCreateAPIView):
    queryset = UserOrganizationData.objects.all()
    serializer_class = UserOrganizationDataSerializer 
    
class UserOrganizationDataDetailView(RetrieveUpdateDestroyAPIView):
    queryset = UserOrganizationData.objects.all()
    serializer_class = UserOrganizationDataSerializer