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

        <div className="containerB">

            <div className='espBInc1'>
                <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
            </div>

            <div>
                <p className='textBInc'>Complete la información de los ingresos de la pieza</p><br />
                <div>
                    <label className='labelBInc'>Nombre de la pieza</label>
                    <input className='inpLabBInc' value={budget_expense_pieces_name} onChange={(e)=>SetBudgetExpensePiecesName(e.target.value)} type="text" placeholder='Ingrese el nombre'/>
                </div>
                <br />
                <div>
                    <label className='labelBInc'>Año en curso</label>
                    <input className='inpLabBInc' value={budget_expense_pieces_year} onChange={(e)=>SetBudgetExpensePiecesYear(e.target.value)} type="text" placeholder='Ingrese el año'/>
                <br /><br />
                <div>
                    <table className='tableBInc'>
                        <tr>
                            <th className='thBInc'>Rubro</th>
                            <th className='thBInc'>Cantidad</th>
                            <th className='thBInc'>Monto</th>
                            <th className='thBInc'>Subtotal</th>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Venta de tiquetes</td>
                            <td><input className='inpBInc' value={budget_expense_pieces_ticket_quantity} onChange={(e)=>SetBudgetExpensePiecesTicketQuantity(e.target.value)} type="cant tiq" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_expense_pieces_ticket_price} onChange={(e)=>SetBudgetExpensePiecesTicketPrice(e.target.value)} type="mont $ tiq" placeholder='Ingrese monto' /></td>
                            <td><input className='inpBInc' value={budget_expense_pieces_ticket_subtotal} onChange={(e)=>SetBudgetExpensePiecesTicketSubtotal(e.target.value)} type="subtot tiq"/></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Subsidios</td>
                            <td><input className='inpBInc' value={budget_expense_pieces_state_subsidies_quantity} onChange={(e)=>SetBudgetExpensePiecesStateSubsidiesQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_expense_pieces_state_subsidies_amount} onChange={(e)=>SetBudgetExpensePiecesStateSubsidiesAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_expense_pieces_state_subsidies_subtotal} onChange={(e)=>SetBudgetExpensePiecesStateSubsidiesSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Donaciones</td>
                            <td><input className='inpBInc' value={budget_expense_pieces_donations_quantity} onChange={(e)=>SetBudgetExpensePiecesDonationsQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_expense_pieces_donations_amount} onChange={(e)=>SetBudgetExpensePiecesDonationsAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_expense_pieces_donations_subtotal} onChange={(e)=>SetBudgetExpensePiecesDonationsSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Patrocinios</td>
                            <td><input className='inpBInc' value={budget_expense_pieces_sponsorships_quantity} onChange={(e)=>SetBudgetExpensePiecesSponsorshipsQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_expense_pieces_sponsorships_amount} onChange={(e)=>SetBudgetExpensePiecesSponsorshipsAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_expense_pieces_sponsorships_subtotal} onChange={(e)=>SetBudgetExpensePiecesSponsorshipsSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                    </table><br />
                    <div className='btnsBInc'>
                        <button type='button' onClick={handleSubmit} className='btnBInc'>Cargar ingresos</button><br /><br />
                        <button type='button' onClick={handleSubmit} className='btnBInc'>Editar ingresos</button><br /><br />
                    </div><br />
                    <div>
                        <label className='labelBInc'>Total de ingresos</label>
                        <input className='inpLabBInc' value={budget_expense_pieces_total} onChange={(e)=>SetBudgetExpensePiecesTotal(e.target.value)} type="text"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CreateExpense;