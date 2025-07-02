from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
import base64
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.core.files.base import ContentFile
from rest_framework.permissions import BasePermission, IsAuthenticated
from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData, PiecesData, BudgetIncomeData, BudgetExpenseData
from .serializers import UserDataSerializer, CompanyDataSerializer, OrganizationDataSerializer, UserCompanyDataSerializer, UserOrganizationDataSerializer, PiecesDataSerializer, BudgetIncomeDataSerializer, BudgetExpenseDataSerializer
from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken

class LoginViewSet(APIView):
    # permission_classes = [permissions.AllowAny]
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('userPassword')
        
        if not username or not password:
            return Response({'error': 'usuario y contraseña son requeridos'}, status=400)
        
        usuario = UserData.objects.filter(username=username, user_password=password).first()
        
        if usuario:
            refresh = RefreshToken.for_user(usuario)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                "exito" :"usuario autenticado correctamente",
            })
        return Response({'error': 'credenciales invalidas'}, status=401)

class IsAdminUserGroup(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name = 'admin').exists()
        
class UserDataListCreateView(ListCreateAPIView):
    # permission_classes = [IsAdminUserGroup,IsAuthenticated]
    queryset = UserData.objects.all()
    serializer_class = UserDataSerializer
    parser_classes = [JSONParser]

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        image_data = data.get("user_image")

        if image_data:
            try:
                format, imgstr = image_data.split(';base64,')
                ext = format.split('/')[-1]
                image_file = ContentFile(base64.b64decode(imgstr), name=f"profile.{ext}")
                data["user_image"] = image_file
            except Exception as e:
                return Response({"error": f"Error al procesar imagen: {str(e)}"}, status=400)

        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response(serializer.data, status=201)
    
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
        
class PiecesDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = PiecesData.objects.all()
    serializer_class = PiecesDataSerializer 
    
class PiecesDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = PiecesData.objects.all()
    serializer_class = PiecesDataSerializer
    
class BudgetIncomeDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = BudgetIncomeData.objects.all()
    serializer_class = BudgetIncomeDataSerializer 
    
class BudgetIncomeDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = BudgetIncomeData.objects.all()
    serializer_class = BudgetIncomeDataSerializer
    
class BudgetExpenseDataListCreateView(ListCreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = BudgetExpenseData.objects.all()
    serializer_class = BudgetExpenseDataSerializer 
    
class BudgetExpenseDataDetailView(RetrieveUpdateDestroyAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = BudgetExpenseData.objects.all()
    serializer_class = BudgetExpenseDataSerializer    