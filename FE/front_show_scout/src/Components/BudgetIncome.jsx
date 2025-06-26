import React, { useState, useEffect } from 'react'
import '../Styles/BudgetIncome.css'
import fetchBudgets from '../Services/fetchBudgets'

function CreateIncomes() {

  const [budget_income_pieces_name,  SetBudgetIncomePiecesName] = useState("")
  const [budget_income_pieces_year, SetBudgetIncomePiecesYear] = useState("")
  const [budget_income_pieces_ticket_quantity, SetBudgetIncomePiecesTicketQuantity] = useState("")    
  const [budget_income_pieces_ticket_price, SetBudgetIncomePiecesTicketPrice] = useState("")    
  const [budget_income_pieces_ticket_subtotal, SetBudgetIncomePiecesTicketSubtotal] = useState("")    
  const [budget_income_pieces_state_subsidies_quantity, SetBudgetIncomePiecesStateSubsidiesQuantity] = useState("") 
  const [budget_income_pieces_state_subsidies_amount, SetBudgetIncomePiecesStateSubsidiesAmount] = useState("") 
  const [budget_income_pieces_state_subsidies_subtotal, SetBudgetIncomePiecesStateSubsidiesSubtotal] = useState("")    
  const [budget_income_pieces_donations_quantity, SetBudgetIncomePiecesDonationsQuantity] = useState("") 
  const [budget_income_pieces_donations_amount, SetBudgetIncomePiecesDonationsAmount] = useState("") 
  const [budget_income_pieces_donations_subtotal, SetBudgetIncomePiecesDonationsSubtotal] = useState("")    
  const [budget_income_pieces_sponsorships_quantity, SetBudgetIncomePiecesSponsorshipsQuantity] = useState("")
  const [budget_income_pieces_sponsorships_amount, SetBudgetIncomePiecesSponsorshipsAmount] = useState("")
  const [budget_income_pieces_sponsorships_subtotal, SetBudgetIncomePiecesSponsorshipsSubtotal] = useState("")    
  const [budget_income_pieces_total, SetBudgetIncomePiecesTotal] = useState("")
  const [budgets, SetBudgets] = useState([])

  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const obj={
        budgets: budgets,
        budget_income_pieces_name: budget_income_pieces_name,
        budget_income_pieces_year: budget_income_pieces_year,
        budget_income_pieces_ticket_quantity: budget_income_pieces_ticket_quantity,
        budget_income_pieces_ticket_price: budget_income_pieces_ticket_price,
        budget_income_pieces_ticket_subtotal: budget_income_pieces_ticket_subtotal,
        budget_income_pieces_state_subsidies_quantity: budget_income_pieces_state_subsidies_quantity,
        budget_income_pieces_state_subsidies_amount: budget_income_pieces_state_subsidies_amount,
        budget_income_pieces_state_subsidies_subtotal: budget_income_pieces_state_subsidies_subtotal,
        budget_income_pieces_donations_quantity: budget_income_pieces_donations_quantity,
        budget_income_pieces_donations_amount: budget_income_pieces_donations_amount,
        budget_income_pieces_donations_subtotal: budget_income_pieces_donations_subtotal,
        budget_income_pieces_sponsorships_quantity: budget_income_pieces_sponsorships_quantity,
        budget_income_pieces_sponsorships_amount: budget_income_pieces_sponsorships_amount,
        budget_income_pieces_sponsorships_subtotal: budget_income_pieces_sponsorships_subtotal,
        budget_income_pieces_total: budget_income_pieces_total
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
                    <input className='inpLabBInc' value={budget_income_pieces_name} onChange={(e)=>SetBudgetIncomePiecesName(e.target.value)} type="text" placeholder='Ingrese el nombre'/>
                </div>
                <br />
                <div>
                    <label className='labelBInc'>Año en curso</label>
                    <input className='inpLabBInc' value={budget_income_pieces_year} onChange={(e)=>SetBudgetIncomePiecesYear(e.target.value)} type="text" placeholder='Ingrese el año'/>
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
                            <td><input className='inpBInc' value={budget_income_pieces_ticket_quantity} onChange={(e)=>SetBudgetIncomePiecesTicketQuantity(e.target.value)} type="cant tiq" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_income_pieces_ticket_price} onChange={(e)=>SetBudgetIncomePiecesTicketPrice(e.target.value)} type="mont $ tiq" placeholder='Ingrese monto' /></td>
                            <td><input className='inpBInc' value={budget_income_pieces_ticket_subtotal} onChange={(e)=>SetBudgetIncomePiecesTicketSubtotal(e.target.value)} type="subtot tiq"/></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Subsidios</td>
                            <td><input className='inpBInc' value={budget_income_pieces_state_subsidies_quantity} onChange={(e)=>SetBudgetIncomePiecesStateSubsidiesQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_income_pieces_state_subsidies_amount} onChange={(e)=>SetBudgetIncomePiecesStateSubsidiesAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_income_pieces_state_subsidies_subtotal} onChange={(e)=>SetBudgetIncomePiecesStateSubsidiesSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Donaciones</td>
                            <td><input className='inpBInc' value={budget_income_pieces_donations_quantity} onChange={(e)=>SetBudgetIncomePiecesDonationsQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_income_pieces_donations_amount} onChange={(e)=>SetBudgetIncomePiecesDonationsAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_income_pieces_donations_subtotal} onChange={(e)=>SetBudgetIncomePiecesDonationsSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Patrocinios</td>
                            <td><input className='inpBInc' value={budget_income_pieces_sponsorships_quantity} onChange={(e)=>SetBudgetIncomePiecesSponsorshipsQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' value={budget_income_pieces_sponsorships_amount} onChange={(e)=>SetBudgetIncomePiecesSponsorshipsAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' value={budget_income_pieces_sponsorships_subtotal} onChange={(e)=>SetBudgetIncomePiecesSponsorshipsSubtotal(e.target.value)}type="subtot pat" /></td>
                        </tr>
                    </table><br />
                    <div className='btnsBInc'>
                        <button type='button' onClick={handleSubmit} className='btnBInc'>Cargar ingresos</button><br /><br />
                        <button type='button' onClick={handleSubmit} className='btnBInc'>Editar ingresos</button><br /><br />
                    </div><br />
                    <div>
                        <label className='labelBInc'>Total de ingresos</label>
                        <input className='inpLabBInc' value={budget_income_pieces_total} onChange={(e)=>SetBudgetIncomePiecesTotal(e.target.value)} type="text"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CreateIncomes;