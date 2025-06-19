from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData, PiecesData
from rest_framework import serializers

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'
         
class CompanyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyData
        fields = '__all__'  
        
class OrganizationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganizationData
        fields = '__all__'                      
        
class UserCompanyDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCompanyData
        fields = '__all__'
        
class UserOrganizationDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserOrganizationData
        fields = '__all__'
        
class PiecesDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PiecesData
        fields = '__all__'