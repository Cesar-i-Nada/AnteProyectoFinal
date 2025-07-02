from .models import UserData, CompanyData, OrganizationData, UserCompanyData, UserOrganizationData, PiecesData, BudgetIncomeData, BudgetExpenseData
from rest_framework import serializers
from PIL import Image
import io

class UserDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserData
        fields = '__all__'

    def validate_user_image(self, image):
        valid_mime_types = ['image/jpeg', 'image/png', 'image/jpg']
        if hasattr(image, 'content_type') and image.content_type not in valid_mime_types:
            raise serializers.ValidationError("Formato de imagen no válido. Solo se permite JPG y PNG.")

        max_size_mb = 2
        if image.size > max_size_mb * 1024 * 1024:
            raise serializers.ValidationError(f"La imagen no puede superar los {max_size_mb}MB.")

        try:
            img = Image.open(image)
            img.verify()
        except Exception:
            raise serializers.ValidationError("La imagen no es válida.")

        return image
         
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
        
class BudgetIncomeDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetIncomeData
        fields = '__all__'
        
class BudgetExpenseDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = BudgetExpenseData
        fields = '__all__'