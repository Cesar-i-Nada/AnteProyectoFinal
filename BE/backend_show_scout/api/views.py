from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import BasePermission, IsAuthenticated
from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData
from .serializers import UserDataSerializer, CompanyDataSerializer, OrganizationDataSerializer, UserCompanyDataSerializer, UserOrganizationDataSerializer
from django.contrib.auth.models import User
from django.shortcuts import render


from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken

class LoginViewSet(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=['post'])
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = IsAuthenticated(username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=401)




class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'admin').exists()
    
class IsInterpreteUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'interprete').exists() 
    
class IsTecnicoUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'tecnico').exists()       
    
class AgregarUserDataView(APIView):
    def post(self,request):
        username = request.data.get("username")
        user_email = request.data.get("email")
        user_password = request.data.get("password")
        
        user_first_name = request.data.get("first_name")
        user_last_name = request.data.get("last_name")
        user_age = request.data.get("user_age")
        user_phone = request.data.get("user_phone")
        user_country = request.data.get("user_country")
        user_address = request.data.get("direccion")
        user_type_profile = request.data.get("user_type_profile")
        user_website = request.data.get("user_website")
        user_social_media = request.data("user_social_media")
        
        UserData.objects.create(
                username=username,
                user_first_name=user_first_name,
                user_last_name=user_last_name,
                user_email=user_email,
                user_password=user_password,
                user_age=user_age,
                user_phone=user_phone,
                user_country=user_country,
                user_address=user_address,
                user_type_profile=user_type_profile,
                user_website=user_website,
                user_social_media=user_social_media
            )
        
        return Response({
            "message":"Usuario creado correctamente"
        })

class UserDataListCreateView(ListCreateAPIView):
    permission_classes = [IsAdminUserGroup,IsAuthenticated]
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer 
    
class UserDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    lookup_field = "id"
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    
class CompanyDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = CompanyData.objects.all()
    serializer_class = CompanyDataSerializer 

class CompanyDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = CompanyData.objects.all()
    serializer_class = CompanyDataSerializer
    
class OrganizationDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = OrganizationData.objects.all()
    serializer_class = OrganizationDataSerializer 
    
class OrganizationDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = OrganizationData.objects.all()
    serializer_class = OrganizationDataSerializer
    
class UserCompanyDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = UserCompanyData.objects.all()
    serializer_class = UserCompanyDataSerializer 
    
class UserCompanyDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = UserCompanyData.objects.all()
    serializer_class = UserCompanyDataSerializer
    
class UserOrganizationDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = UserOrganizationData.objects.all()
    serializer_class = UserOrganizationDataSerializer 
    
class UserOrganizationDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = UserOrganizationData.objects.all()
    serializer_class = UserOrganizationDataSerializer