import React, { useState, useEffect } from 'react';
import '../Styles/BudgetIncome.css';
import fetchBudgets from '../Services/fetchBudgets';

function CreateIncomes() {
  const [budget_income_pieces_name, SetBudgetIncomePiecesName] = useState('');
  const [budget_income_pieces_year, SetBudgetIncomePiecesYear] = useState('');
  const [budget_income_pieces_ticket_quantity, SetBudgetIncomePiecesTicketQuantity] = useState('');
  const [budget_income_pieces_ticket_price, SetBudgetIncomePiecesTicketPrice] = useState('');
  const [budget_income_pieces_ticket_subtotal, SetBudgetIncomePiecesTicketSubtotal] = useState('');
  const [budget_income_pieces_state_subsidies_quantity, SetBudgetIncomePiecesStateSubsidiesQuantity] = useState('');
  const [budget_income_pieces_state_subsidies_amount, SetBudgetIncomePiecesStateSubsidiesAmount] = useState('');
  const [budget_income_pieces_state_subsidies_subtotal, SetBudgetIncomePiecesStateSubsidiesSubtotal] = useState('');
  const [budget_income_pieces_donations_quantity, SetBudgetIncomePiecesDonationsQuantity] = useState('');
  const [budget_income_pieces_donations_amount, SetBudgetIncomePiecesDonationsAmount] = useState('');
  const [budget_income_pieces_donations_subtotal, SetBudgetIncomePiecesDonationsSubtotal] = useState('');
  const [budget_income_pieces_sponsorships_quantity, SetBudgetIncomePiecesSponsorshipsQuantity] = useState('');
  const [budget_income_pieces_sponsorships_amount, SetBudgetIncomePiecesSponsorshipsAmount] = useState('');
  const [budget_income_pieces_sponsorships_subtotal, SetBudgetIncomePiecesSponsorshipsSubtotal] = useState('');
  const [budget_income_pieces_total, SetBudgetIncomePiecesTotal] = useState('');
  const [budgets, SetBudgets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const datos = await fetchBudgets.getBudgets();
      SetBudgets(datos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const ticketSubtotal = (parseFloat(budget_income_pieces_ticket_quantity) || 0) * (parseFloat(budget_income_pieces_ticket_price) || 0);
    const subsidiesSubtotal = (parseFloat(budget_income_pieces_state_subsidies_quantity) || 0) * (parseFloat(budget_income_pieces_state_subsidies_amount) || 0);
    const donationsSubtotal = (parseFloat(budget_income_pieces_donations_quantity) || 0) * (parseFloat(budget_income_pieces_donations_amount) || 0);
    const sponsorshipsSubtotal = (parseFloat(budget_income_pieces_sponsorships_quantity) || 0) * (parseFloat(budget_income_pieces_sponsorships_amount) || 0);

    SetBudgetIncomePiecesTicketSubtotal(ticketSubtotal.toFixed(2));
    SetBudgetIncomePiecesStateSubsidiesSubtotal(subsidiesSubtotal.toFixed(2));
    SetBudgetIncomePiecesDonationsSubtotal(donationsSubtotal.toFixed(2));
    SetBudgetIncomePiecesSponsorshipsSubtotal(sponsorshipsSubtotal.toFixed(2));

    const total = ticketSubtotal + subsidiesSubtotal + donationsSubtotal + sponsorshipsSubtotal;
    SetBudgetIncomePiecesTotal(total.toFixed(2));
  }, [
    budget_income_pieces_ticket_quantity,
    budget_income_pieces_ticket_price,
    budget_income_pieces_state_subsidies_quantity,
    budget_income_pieces_state_subsidies_amount,
    budget_income_pieces_donations_quantity,
    budget_income_pieces_donations_amount,
    budget_income_pieces_sponsorships_quantity,
    budget_income_pieces_sponsorships_amount
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      budgets,
      budget_income_pieces_name,
      budget_income_pieces_year,
      budget_income_pieces_ticket_quantity,
      budget_income_pieces_ticket_price,
      budget_income_pieces_ticket_subtotal,
      budget_income_pieces_state_subsidies_quantity,
      budget_income_pieces_state_subsidies_amount,
      budget_income_pieces_state_subsidies_subtotal,
      budget_income_pieces_donations_quantity,
      budget_income_pieces_donations_amount,
      budget_income_pieces_donations_subtotal,
      budget_income_pieces_sponsorships_quantity,
      budget_income_pieces_sponsorships_amount,
      budget_income_pieces_sponsorships_subtotal,
      budget_income_pieces_total
    };

    try {
      const response = await fetchBudgets.postBudgets('http://127.0.0.1:8000/api/budgetData/', obj);
      if (response.status === 201) {
        console.log('Post creado exitosamente:', response.data);
      }
    } catch (error) {
      console.error('Error al crear el post:', error);
    }
  };

  return (
    <div className="containerBInc">
      <div className="espBInc1">
        <img className="Cabritas" src="src/assets/img/CabritasClr.gif" />
      </div>

      <div>
        <p className="textBInc">Complete la información de los ingresos de la pieza</p><br />
        <div>
          <label className="labelBInc">Nombre de la pieza</label>
          <input className="inpLabBInc" value={budget_income_pieces_name} onChange={(e) => SetBudgetIncomePiecesName(e.target.value)} type="text" placeholder="Ingrese el nombre" />
        </div><br />
        <div>
          <label className="labelBInc">Año en curso</label>
          <input className="inpLabBInc" value={budget_income_pieces_year} onChange={(e) => SetBudgetIncomePiecesYear(e.target.value)} type="text" placeholder="Ingrese el año" />
        </div><br />

        <table className="tableBInc">
          <thead>
            <tr>
              <th className="thBInc">Rubro</th>
              <th className="thBInc">Cantidad</th>
              <th className="thBInc">Monto</th>
              <th className="thBInc">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Venta de tiquetes</td>
              <td><input className="inpBInc" value={budget_income_pieces_ticket_quantity} onChange={(e) => SetBudgetIncomePiecesTicketQuantity(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_ticket_price} onChange={(e) => SetBudgetIncomePiecesTicketPrice(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_ticket_subtotal} readOnly /></td>
            </tr>
            <tr>
              <td>Subsidios</td>
              <td><input className="inpBInc" value={budget_income_pieces_state_subsidies_quantity} onChange={(e) => SetBudgetIncomePiecesStateSubsidiesQuantity(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_state_subsidies_amount} onChange={(e) => SetBudgetIncomePiecesStateSubsidiesAmount(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_state_subsidies_subtotal} readOnly /></td>
            </tr>
            <tr>
              <td>Donaciones</td>
              <td><input className="inpBInc" value={budget_income_pieces_donations_quantity} onChange={(e) => SetBudgetIncomePiecesDonationsQuantity(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_donations_amount} onChange={(e) => SetBudgetIncomePiecesDonationsAmount(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_donations_subtotal} readOnly /></td>
            </tr>
            <tr>
              <td>Patrocinios</td>
              <td><input className="inpBInc" value={budget_income_pieces_sponsorships_quantity} onChange={(e) => SetBudgetIncomePiecesSponsorshipsQuantity(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_sponsorships_amount} onChange={(e) => SetBudgetIncomePiecesSponsorshipsAmount(e.target.value)} /></td>
              <td><input className="inpBInc" value={budget_income_pieces_sponsorships_subtotal} readOnly /></td>
            </tr>
          </tbody>
        </table><br />

        <div className="btnsBInc">
          <button type="button" onClick={handleSubmit} className="btnBInc">Cargar ingresos</button><br /><br />
          <button type="button" onClick={handleSubmit} className="btnBInc">Editar ingresos</button><br /><br />
        </div><br />

        <div>
          <label className="labelBInc">Total de ingresos</label>
          <input className="inpLabBInc" value={budget_income_pieces_total} readOnly />
        </div>
      </div>
    </div>
  );
}

export default CreateIncomes;
