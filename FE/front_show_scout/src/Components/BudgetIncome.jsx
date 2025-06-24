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
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espCreateB'>
            <p className='textCreateB'>Complete la información de los ingresos de la pieza</p><br />
            
            <input className='inpB' value={budget_income_pieces_name} onChange={(e)=>SetBudgetIncomePiecesName(e.target.value)} type="text" placeholder='Nombre de la pieza'/>
            <input className='inpB' value={budget_income_pieces_year} onChange={(e)=>SetBudgetIncomePiecesYear(e.target.value)} type="text" placeholder='Año de la pieza'/>
            <input className='inpB' value={budget_income_pieces_ticket_sales} onChange={(e)=>SetBudgetIncomePiecesTicketSales(e.target.value)} type="text" placeholder='Venta de tiquetes'/>
            <input className='inpB' value={budget_income_pieces_sponsorships} onChange={(e)=>SetBudgetIncomePiecesSponsorships(e.target.value)} type="text" placeholder='Patrocinio'/>
            <button type='button' onClick={handleSubmit} className='btnIniciarB'>Cargar ingresos</button><br /><br />
            <p>Total de ingresos</p>
          </div>
        </div>
    </div>
    </div>
)} 

export default CreateIncomes