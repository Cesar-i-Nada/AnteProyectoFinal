import React, { useState, useEffect } from 'react'
import '../Styles/BudgetExpense.css'
import fetchBudgets from '../Services/fetchBudgets'

function CreateExpense() {

  const [budget_expense_pieces_name,  SetBudgetExpensePiecesName] = useState("")
  const [budget_expense_pieces_year, SetBudgetExpensePiecesYear] = useState("")
  const [budget_expense_pieces_marketing_quantity, SetBudgetExpensePiecesMarketingQuantity] = useState("")    
  const [budget_expense_pieces_marketing_amount, SetBudgetExpensePiecesMarketingAmount] = useState("")    
  const [budget_expense_pieces_marketing_subtotal, SetBudgetExpensePiecesMarketingSubtotal] = useState("")      
  const [budget_expense_pieces_production_quantity, SetBudgetExpensePiecesProductionQuantity] = useState("")    
  const [budget_expense_pieces_production_amount, SetBudgetExpensePiecesProductionAmount] = useState("")    
  const [budget_expense_pieces_production_subtotal, SetBudgetExpensePiecesProductionSubtotal] = useState("")    
  const [budget_expense_pieces_costume_quantity, SetBudgetExpensePiecesCostumeQuantity] = useState("")    
  const [budget_expense_pieces_costume_amount, SetBudgetExpensePiecesCostumeAmount] = useState("")    
  const [budget_expense_pieces_costume_subtotal, SetBudgetExpensePiecesCostumeSubtotal] = useState("")    
  const [budget_expense_pieces_set_design_quantity, SetBudgetExpensePiecesSetDesignQuantity] = useState("") 
  const [budget_expense_pieces_set_design_amount, SetBudgetExpensePiecesSetDesignAmount] = useState("") 
  const [budget_expense_pieces_set_design_subtotal, SetBudgetExpensePiecesSetDesignSubtotal] = useState("") 
  const [budget_expense_pieces_art_design_quantity, SetBudgetExpensePiecesArtDesignQuantity] = useState("") 
  const [budget_expense_pieces_art_design_amount, SetBudgetExpensePiecesArtDesignAmount] = useState("") 
  const [budget_expense_pieces_art_design_subtotal, SetBudgetExpensePiecesArtDesignSubtotal] = useState("") 
  const [budget_expense_pieces_music_quantity, SetBudgetExpensePiecesMusicQuantity] = useState("") 
  const [budget_expense_pieces_music_amount, SetBudgetExpensePiecesMusicAmount] = useState("") 
  const [budget_expense_pieces_music_subtotal, SetBudgetExpensePiecesMusicSubtotal] = useState("") 
  const [budget_expense_pieces_lighting_quantity, SetBudgetExpensePiecesLightingQuantity] = useState("") 
  const [budget_expense_pieces_lighting_amount, SetBudgetExpensePiecesLightingAmount] = useState("") 
  const [budget_expense_pieces_lighting_subtotal, SetBudgetExpensePiecesLightingSubtotal] = useState("")    
  const [budget_expense_pieces_sound_quantity, SetBudgetExpensePiecesSoundQuantity] = useState("")
  const [budget_expense_pieces_sound_amount, SetBudgetExpensePiecesSoundAmount] = useState("")
  const [budget_expense_pieces_sound_subtotal, SetBudgetExpensePiecesSoundSubtotal] = useState("")    
  const [budget_expense_pieces_transportation_quantity, SetBudgetExpensePiecesTransportationQuantity] = useState("")
  const [budget_expense_pieces_transportation_amount, SetBudgetExpensePiecesTransportationAmount] = useState("")
  const [budget_expense_pieces_transportation_subtotal, SetBudgetExpensePiecesTransportationSubtotal] = useState("")    
  const [budget_expense_pieces_accommodation_quantity, SetBudgetExpensePiecesAccommodationQuantity] = useState("")
  const [budget_expense_pieces_accommodation_amount, SetBudgetExpensePiecesAccommodationAmount] = useState("")
  const [budget_expense_pieces_accommodation_subtotal, SetBudgetExpensePiecesAccommodationSubtotal] = useState("")    
  const [budget_expense_pieces_miscellaneous_quantity, SetBudgetExpensePiecesMiscellaneousQuantity] = useState("")
  const [budget_expense_pieces_miscellaneous_amount, SetBudgetExpensePiecesMiscellaneousAmount] = useState("")
  const [budget_expense_pieces_miscellaneous_subtotal, SetBudgetExpensePiecesMiscellaneousSubtotal] = useState("")    
  const [budget_expense_pieces_fees_quantity, SetBudgetExpensePiecesFeesQuantity] = useState("")
  const [budget_expense_pieces_fees_amount, SetBudgetExpensePiecesFeesAmount] = useState("")
  const [budget_expense_pieces_fees_subtotal, SetBudgetExpensePiecesFeesSubtotal] = useState("")    
  const [budget_expense_pieces_food_quantity, SetBudgetExpensePiecesFoodQuantity] = useState("")
  const [budget_expense_pieces_food_amount, SetBudgetExpensePiecesFoodAmount] = useState("")
  const [budget_expense_pieces_food_subtotal, SetBudgetExpensePiecesFoodSubtotal] = useState("")    
  const [budget_expense_pieces_rental_quantity, SetBudgetExpensePiecesRentalQuantity] = useState("")
  const [budget_expense_pieces_rental_amount, SetBudgetExpensePiecesRentalAmount] = useState("")
  const [budget_expense_pieces_rental_subtotal, SetBudgetExpensePiecesRentalSubtotal] = useState("")    
  const [budget_expense_pieces_total, SetBudgetExpensePiecesTotal] = useState("")
  const [budgets, SetBudgets] = useState([])

  const handleSubmit = async (e) => {
      e.preventDefault();
      const obj={
        budgets: budgets,
        budget_expense_pieces_name: budget_expense_pieces_name,
        budget_expense_pieces_year: budget_expense_pieces_year,
        budget_expense_pieces_marketing_quantity: budget_expense_pieces_marketing_quantity,     
        budget_expense_pieces_marketing_amount: budget_expense_pieces_marketing_amount, 
        budget_expense_pieces_marketing_subtotal: budget_expense_pieces_marketing_subtotal,   
        budget_expense_pieces_production_quantity: budget_expense_pieces_production_quantity, 
        budget_expense_pieces_production_amount: budget_expense_pieces_production_amount,
        budget_expense_pieces_production_subtotal: budget_expense_pieces_production_subtotal,   
        budget_expense_pieces_costume_quantity: budget_expense_pieces_costume_quantity,
        budget_expense_pieces_costume_amount: budget_expense_pieces_costume_amount, 
        budget_expense_pieces_costume_subtotal: budget_expense_pieces_costume_subtotal,
        budget_expense_pieces_set_design_quantity: budget_expense_pieces_set_design_quantity,
        budget_expense_pieces_set_design_amount: budget_expense_pieces_set_design_amount, 
        budget_expense_pieces_set_design_subtotal: budget_expense_pieces_set_design_amount, 
        budget_expense_pieces_art_design_quantity: budget_expense_pieces_art_design_quantity,
        budget_expense_pieces_art_design_amount: budget_expense_pieces_art_design_amount,
        budget_expense_pieces_art_design_subtotal: budget_expense_pieces_art_design_subtotal,
        budget_expense_pieces_music_quantity: budget_expense_pieces_music_quantity, 
        budget_expense_pieces_music_amount: budget_expense_pieces_music_amount, 
        budget_expense_pieces_music_subtotal: budget_expense_pieces_music_subtotal, 
        budget_expense_pieces_lighting_quantity: budget_expense_pieces_lighting_quantity, 
        budget_expense_pieces_lighting_amount: budget_expense_pieces_lighting_amount,
        budget_expense_pieces_lighting_subtotal: budget_expense_pieces_lighting_subtotal, 
        budget_expense_pieces_sound_quantity: budget_expense_pieces_sound_quantity, 
        budget_expense_pieces_sound_amount:  budget_expense_pieces_sound_amount,
        budget_expense_pieces_sound_subtotal: budget_expense_pieces_sound_subtotal, 
        budget_expense_pieces_transportation_quantity: budget_expense_pieces_transportation_quantity,  
        budget_expense_pieces_transportation_amount: budget_expense_pieces_transportation_amount, 
        budget_expense_pieces_transportation_subtotal: budget_expense_pieces_transportation_subtotal,   
        budget_expense_pieces_accommodation_quantity: budget_expense_pieces_accommodation_quantity,
        budget_expense_pieces_accommodation_amount: budget_expense_pieces_accommodation_amount,
        budget_expense_pieces_accommodation_subtotal: budget_expense_pieces_accommodation_subtotal,   
        budget_expense_pieces_miscellaneous_quantity: budget_expense_pieces_miscellaneous_quantity, 
        budget_expense_pieces_miscellaneous_amount: budget_expense_pieces_miscellaneous_amount, 
        budget_expense_pieces_miscellaneous_subtotal: budget_expense_pieces_miscellaneous_subtotal,     
        budget_expense_pieces_fees_quantity: budget_expense_pieces_fees_quantity,
        budget_expense_pieces_fees_amount: budget_expense_pieces_fees_amount, 
        budget_expense_pieces_fees_subtotal: budget_expense_pieces_fees_subtotal,  
        budget_expense_pieces_food_quantity: budget_expense_pieces_food_quantity, 
        budget_expense_pieces_food_amount: budget_expense_pieces_food_amount, 
        budget_expense_pieces_food_subtotal: budget_expense_pieces_food_subtotal,  
        budget_expense_pieces_rental_quantity: budget_expense_pieces_rental_quantity,
        budget_expense_pieces_rental_amount: budget_expense_pieces_rental_amount,
        budget_expense_pieces_rental_subtotal: budget_expense_pieces_rental_subtotal, 
        budget_expense_pieces_total: budget_expense_pieces_total
        }
    try {
      const response = await fetchBudgets.postBudgets('http://127.0.0.1:8000/api/budgetData/', obj);
      if (response.status === 201) {
        
        console.log('Post creado exitosamente:', response.data);
        
      }
    } catch (error) {
      
      console.error('Error al crear el post:', error);
    }
  };

  useEffect (() => {
  
      async function fetchBudgets() {
  
        const datos = await fetchBudgets.getBudgets()
        SetBudgets(datos)
      };
  
      fetchBudgets();
    }, []);


function CalcBInc() {
  const num1 = '';
  const num2 = '';
  const multiplicacion = num1 * num2;
  const suma = num1 + num2;

  return (
    <div>
      <p>Multiplicación: {multiplicacion}</p>
      <p>Suma: {suma}</p>
      
    </div>
  );
}    

return (
    <div>

        <div className="containerBExp">

            <div className='espBExp1'>
                <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
            </div>

            <div>
                <p className='textBExp'>Complete la información de los egresos de la pieza</p><br />
                <div>
                    <label className='labelBExp'>Nombre de la pieza</label>
                    <input className='inpLabBExp' value={budget_expense_pieces_name} onChange={(e)=>SetBudgetExpensePiecesName(e.target.value)} type="text" placeholder='Ingrese el nombre'/>
                </div>
                <br />
                <div>
                    <label className='labelBExp'>Año en curso</label>
                    <input className='inpLabBExp' value={budget_expense_pieces_year} onChange={(e)=>SetBudgetExpensePiecesYear(e.target.value)} type="text" placeholder='Ingrese el año'/>
                <br /><br />
                <div>
                    <table className='tableBExp'>
                        <tr>
                            <th className='thBExp'>Rubro</th>
                            <th className='thBExp'>Cantidad</th>
                            <th className='thBExp'>Monto</th>
                            <th className='thBExp'>Subtotal</th>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Marketing</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_marketing_quantity} onChange={(e)=>SetBudgetExpensePiecesMarketingQuantity(e.target.value)} type="cant tiq" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_marketing_amount} onChange={(e)=>SetBudgetExpensePiecesMarketingAmount(e.target.value)} type="mont $ tiq" placeholder='Ingrese monto' /></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_marketing_subtotal} onChange={(e)=>SetBudgetExpensePiecesMarketingSubtotal(e.target.value)} type="subtot tiq"/></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Production</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_production_quantity} onChange={(e)=>SetBudgetExpensePiecesProductionQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_production_amount} onChange={(e)=>SetBudgetExpensePiecesProductionAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_production_subtotal} onChange={(e)=>SetBudgetExpensePiecesProductionSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Costume</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_quantity} onChange={(e)=>SetBudgetExpensePiecesCostumeQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_amount} onChange={(e)=>SetBudgetExpensePiecesCostumeAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_subtotal} onChange={(e)=>SetBudgetExpensePiecesCostumeSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Set Design</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_quantity} onChange={(e)=>SetBudgetExpensePiecesSetDesignQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_amount} onChange={(e)=>SetBudgetExpensePiecesSetDesignAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_subtotal} onChange={(e)=>SetBudgetExpensePiecesSetDesignSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Art Design</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_quantity} onChange={(e)=>SetBudgetExpensePiecesArtDesignQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_amount} onChange={(e)=>SetBudgetExpensePiecesArtDesignAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_subtotal} onChange={(e)=>SetBudgetExpensePiecesArtDesignSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Music</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_music_quantity} onChange={(e)=>SetBudgetExpensePiecesMusicQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_music_amount} onChange={(e)=>SetBudgetExpensePiecesMusicAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_music_subtotal} onChange={(e)=>SetBudgetExpensePiecesMusicSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Lighting</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_quantity} onChange={(e)=>SetBudgetExpensePiecesLightingQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_amount} onChange={(e)=>SetBudgetExpensePiecesLightingAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_subtotal} onChange={(e)=>SetBudgetExpensePiecesLightingSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Sound</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_quantity} onChange={(e)=>SetBudgetExpensePiecesSoundQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_amount} onChange={(e)=>SetBudgetExpensePiecesSoundAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_subtotal} onChange={(e)=>SetBudgetExpensePiecesSoundSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Transportation</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_quantity} onChange={(e)=>SetBudgetExpensePiecesTransportationQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_amount} onChange={(e)=>SetBudgetExpensePiecesTransportationAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_subtotal} onChange={(e)=>SetBudgetExpensePiecesTransportationSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Accommodation</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_quantity} onChange={(e)=>SetBudgetExpensePiecesAccommodationQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_amount} onChange={(e)=>SetBudgetExpensePiecesAccommodationAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_subtotal} onChange={(e)=>SetBudgetExpensePiecesAccommodationSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Miscellaneous</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_quantity} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_amount} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_subtotal} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Fees</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_quantity} onChange={(e)=>SetBudgetExpensePiecesFeesQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_amount} onChange={(e)=>SetBudgetExpensePiecesFeesAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_subtotal} onChange={(e)=>SetBudgetExpensePiecesFeesSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Food</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_food_quantity} onChange={(e)=>SetBudgetExpensePiecesFoodQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_food_amount} onChange={(e)=>SetBudgetExpensePiecesFoodAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_food_subtotal} onChange={(e)=>SetBudgetExpensePiecesFoodSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Rental</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_quantity} onChange={(e)=>SetBudgetExpensePiecesRentalQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_amount} onChange={(e)=>SetBudgetExpensePiecesRentalAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_subtotal} onChange={(e)=>SetBudgetExpensePiecesRentalSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                    </table><br />
                    <div className='btnsBExp'>
                        <button type='button' onClick={handleSubmit} className='btnBExp'>Cargar ingresos</button><br /><br />
                        <button type='button' onClick={handleSubmit} className='btnBExp'>Editar ingresos</button><br /><br />
                    </div><br />
                    <div>
                        <label className='labelBExp'>Total de ingresos</label>
                        <input className='inpLabBExp' value={budget_expense_pieces_total} onChange={(e)=>SetBudgetExpensePiecesTotal(e.target.value)} type="text"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CreateExpense;