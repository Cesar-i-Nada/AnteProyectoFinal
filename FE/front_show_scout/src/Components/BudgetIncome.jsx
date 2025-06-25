import React, { useState, useEffect } from 'react'
import '../Styles/BudgetIncome.css'
import fetchBudgets from '../Services/fetchBudgets'



function CreateIncomes() {

  const [budget_income_pieces_name,  SetBudgetIncomePiecesName] = useState("")
  const [budget_income_pieces_year, SetBudgetIncomePiecesYear] = useState("")
  const [budget_income_pieces_ticket_sales, SetBudgetIncomePiecesTicketSales] = useState("")    
  const [budget_income_pieces_sponsorships, SetBudgetIncomePiecesSponsorships] = useState("")
  const [budget_income_pieces_total, SetBudgetIncomePiecesTotal] = useState("")
  const [budgets, SetBudgets] = useState([])

  
  const handleSubmit = async (e) => {
      e.preventDefault();
      const obj={
        budgets: budgets,
        budget_income_pieces_name: budget_income_pieces_name,
        budget_income_pieces_year: budget_income_pieces_year,
        budget_income_pieces_sponsorships: budget_income_pieces_sponsorships,
        budget_income_pieces_ticket_sales: budget_income_pieces_ticket_sales,
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

return (
    <div>

        <div className="containerB">

            <div className='espBInc1'>
                <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
            </div>

            <div>
                <p className='textBInc'>Complete la información de los ingresos de la pieza</p><br />
                <div className='espCreateB'>
                    <label className='labelBInc'>Nombre de la pieza</label>
                    <input className='inpLabBInc' value={budget_income_pieces_name} onChange={(e)=>SetBudgetIncomePiecesName(e.target.value)} type="text" placeholder='Ingrese el nombre'/>
                <br /><br />
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
                            <td><input className='inpBInc' value={budget_income_pieces_ticket_sales} onChange={(e)=>SetBudgetIncomePiecesTicketSales(e.target.value)} type="cant tiq" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' type="mont $ tiq" placeholder='Ingrese monto' /></td>
                            <td><input className='inpBInc' type="subtot tiq" /></td>
                        </tr>
                        <tr>
                            <td className='tdBInc'>Patrocinios</td>
                            <td><input className='inpBInc' value={budget_income_pieces_sponsorships} onChange={(e)=>SetBudgetIncomePiecesSponsorships(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBInc' type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBInc' type="subtot pat" /></td>
                        </tr>
                    </table><br />
                    <button type='button' onClick={handleSubmit} className='btnBInc'>Cargar ingresos</button><br /><br />
                    <p className='labelBInc'>Total de ingresos</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default CreateIncomes;