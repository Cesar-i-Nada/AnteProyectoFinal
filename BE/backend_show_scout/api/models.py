from django.db import models

class UserData(models.Model):
    #obligatorios
    username = models.CharField(max_length=50, blank=False, null=False)
    user_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    user_password = models.CharField(max_length=16, blank=False, null=False)
    
    #adicionales
    user_first_name = models.CharField(max_length=50, default="")
    user_last_name = models.CharField(max_length=50,default="")
    user_age = models.IntegerField(default=0)
    user_phone = models.CharField(max_length=50, default="")
    user_country = models.CharField(max_length=30, default="")
    user_address = models.CharField(max_length=200, default="") 
    user_type_profile = models.CharField(max_length=50, default="")
    user_website = models.CharField(max_length=200, default="")
    user_social_media = models.CharField(max_length=200,default="")
                
class CompanyData(models.Model):
    #obligatorios
    company_name = models.CharField(max_length=200, blank=False, null=False)
    company_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    company_password = models.CharField(max_length=16, blank=False, null=False)
    
    #adicionales
    company_funding = models.DateField(blank=False, null=False)
    company_phone = models.CharField(max_length=50, blank=False, null=False)
    company_country = models.CharField(max_length=30, blank=False, null=False)
    company_address = models.CharField(max_length=200, blank=False, null=False)
    company_type_profile = models.CharField(max_length=50, blank=False, null=False)
    company_website = models.CharField(max_length=200, blank=False, null=False)
    company_social_media = models.CharField(max_length=200, blank=False, null=False) 
    
class OrganizationData(models.Model):
    #obligatorios
    organization_name = models.CharField(max_length=200, blank=False, null=False)
    organization_email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    organization_password = models.CharField(max_length=16, blank=False, null=False)
    
    #adicionales
    organization_funding = models.DateField(blank=False, null=False)
    organization_phone = models.CharField(max_length=50, blank=False, null=False)
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
          
class PiecesData(models.Model):
    #obligatorios
    pieces_start_date = models.DateField(blank=False, null=False)
    pieces_submission_date = models.DateField(blank=False, null=False)
    
    #adicionales
    pieces_name = models.CharField(max_length=200, blank=False, null=False)
    pieces_director = models.CharField(max_length=200, blank=False, null=False)
    pieces_cast = models.CharField(max_length=200, blank=False, null=False)
    pieces_description = models.TextField(blank=False, null=False)
    pieces_duration = models.IntegerField(blank=False, null=False) #Duración en minutos
    pieces_genre = models.CharField(max_length=30, blank=False, null=False)
    pieces_year = models.IntegerField(blank=False, null=False)
    pieces_website = models.CharField(max_length=200, blank=False, null=False)
    pieces_social_media = models.CharField(max_length=200, blank=False, null=False)
    pieces_trailer = models.CharField(max_length=200, blank=True, null=True)
    pieces_poster = models.ImageField(upload_to='pieces_posters/', blank=True, null=True)
    pieces_video = models.FileField(upload_to='pieces_videos/', blank=True, null=True)
    
class BudgetIncomeData(models.Model):
    #obligatorios
    budget_income_pieces_name = models.CharField(max_length=200, blank=False, null=False)
    budget_income_pieces_year = models.IntegerField(blank=False, null=False)
    
    #adicionales
    budget_income_pieces_sponsorships = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_income_pieces_ticket_sales = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_income_pieces_total = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)

    
class BudgetExpenseData(models.Model):
    #obligatorios
    budget_expense_pieces_name = models.CharField(max_length=200, blank=False, null=False)
    budget_expense_pieces_year = models.IntegerField(blank=False, null=False)
    
    #adicionales
    budget_expense_pieces_marketing = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_production = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_costumes = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_set_design = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_art_design = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_music = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_lighting = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_sound = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_transportation = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_accommodation = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_miscellaneous = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_fees = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_food = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    budget_expense_pieces_rental = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)   
    budget_expense_pieces_total = models.DecimalField(max_digits=10, decimal_places=2, blank=False, null=False)
    
        