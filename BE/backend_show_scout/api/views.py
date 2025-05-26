from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData
from .serializers import UserDataSerializer, CompanyDataSerializer, OrganizationDataSerializer, UserCompanyDataSerializer, UserOrganizationDataSerializer

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