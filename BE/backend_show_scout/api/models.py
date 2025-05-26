from django.db import models

class UserData(models.Model):
    username = models.CharField(max_length=30, blank=False, null=False)
    user_lastname = models.CharField(max_length=50, blank=False, null=False)
    user_age = models.IntegerField(blank=False, null=False)
    user_phone = models.CharField(max_length=50, blank=False, null=False)
    user_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    user_country = models.CharField(max_length=30, blank=False, null=False)
    user_type_profile = models.CharField(max_length=50, blank=False, null=False)
    
class CompanyData(models.Model):
    company_name = models.CharField(max_length=200, blank=False, null=False)
    company_funding = models.DateField(blank=False, null=False)
    company_phone = models.CharField(max_length=50, blank=False, null=False)
    company_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    company_country = models.CharField(max_length=30, blank=False, null=False)
    company_address = models.CharField(max_length=200, blank=False, null=False)
    company_type_profile = models.CharField(max_length=50, blank=False, null=False)
    company_website = models.CharField(max_length=200, blank=False, null=False)
    company_social_media = models.CharField(max_length=200, blank=False, null=False) 
    
class OrganizationData(models.Model):
    organization_name = models.CharField(max_length=200, blank=False, null=False)
    organization_funding = models.DateField(blank=False, null=False)
    organization_phone = models.CharField(max_length=50, blank=False, null=False)
    organization_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    organization_country = models.CharField(max_length=30, blank=False, null=False)
    organization_address = models.CharField(max_length=200, blank=False, null=False)
    organization_type_profile = models.CharField(max_length=50, blank=False, null=False)
    organization_website = models.CharField(max_length=200, blank=False, null=False)
    organization_social_media = models.CharField(max_length=200, blank=False, null=False)
    
class UserCompanyData(models.Model):
    user_data = models.ForeignKey(UserData, on_delete=models.CASCADE, blank=False, null=False)
    company_data = models.ForeignKey(CompanyData, on_delete=models.CASCADE, blank=False, null=False)
    
class UserOrganizationData(models.Model):
    user_data = models.ForeignKey(UserData, on_delete=models.CASCADE, blank=False, null=False)
    organization_data = models.ForeignKey(OrganizationData, on_delete=models.CASCADE, blank=False, null=False)
          