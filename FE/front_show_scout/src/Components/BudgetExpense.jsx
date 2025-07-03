import React, { useState, useEffect } from 'react'
import '../Styles/BudgetExpense.css'
import fetchBudgets from '../Services/fetchBudgets'

function CreateExpense() {
  const [budget_expense_pieces_name,  SetBudgetExpensePiecesName] = useState('')
  const [budget_expense_pieces_year, SetBudgetExpensePiecesYear] = useState('')
  const [budget_expense_pieces_marketing_quantity, SetBudgetExpensePiecesMarketingQuantity] = useState('')    
  const [budget_expense_pieces_marketing_amount, SetBudgetExpensePiecesMarketingAmount] = useState('')    
  const [budget_expense_pieces_marketing_subtotal, SetBudgetExpensePiecesMarketingSubtotal] = useState('')      
  const [budget_expense_pieces_production_quantity, SetBudgetExpensePiecesProductionQuantity] = useState('')    
  const [budget_expense_pieces_production_amount, SetBudgetExpensePiecesProductionAmount] = useState('')    
  const [budget_expense_pieces_production_subtotal, SetBudgetExpensePiecesProductionSubtotal] = useState('')    
  const [budget_expense_pieces_costume_quantity, SetBudgetExpensePiecesCostumeQuantity] = useState('')    
  const [budget_expense_pieces_costume_amount, SetBudgetExpensePiecesCostumeAmount] = useState('')    
  const [budget_expense_pieces_costume_subtotal, SetBudgetExpensePiecesCostumeSubtotal] = useState('')    
  const [budget_expense_pieces_set_design_quantity, SetBudgetExpensePiecesSetDesignQuantity] = useState('') 
  const [budget_expense_pieces_set_design_amount, SetBudgetExpensePiecesSetDesignAmount] = useState('') 
  const [budget_expense_pieces_set_design_subtotal, SetBudgetExpensePiecesSetDesignSubtotal] = useState('') 
  const [budget_expense_pieces_art_design_quantity, SetBudgetExpensePiecesArtDesignQuantity] = useState('') 
  const [budget_expense_pieces_art_design_amount, SetBudgetExpensePiecesArtDesignAmount] = useState('') 
  const [budget_expense_pieces_art_design_subtotal, SetBudgetExpensePiecesArtDesignSubtotal] = useState('') 
  const [budget_expense_pieces_music_quantity, SetBudgetExpensePiecesMusicQuantity] = useState('') 
  const [budget_expense_pieces_music_amount, SetBudgetExpensePiecesMusicAmount] = useState('') 
  const [budget_expense_pieces_music_subtotal, SetBudgetExpensePiecesMusicSubtotal] = useState('') 
  const [budget_expense_pieces_lighting_quantity, SetBudgetExpensePiecesLightingQuantity] = useState('') 
  const [budget_expense_pieces_lighting_amount, SetBudgetExpensePiecesLightingAmount] = useState('') 
  const [budget_expense_pieces_lighting_subtotal, SetBudgetExpensePiecesLightingSubtotal] = useState('')    
  const [budget_expense_pieces_sound_quantity, SetBudgetExpensePiecesSoundQuantity] = useState('')
  const [budget_expense_pieces_sound_amount, SetBudgetExpensePiecesSoundAmount] = useState('')
  const [budget_expense_pieces_sound_subtotal, SetBudgetExpensePiecesSoundSubtotal] = useState('')    
  const [budget_expense_pieces_transportation_quantity, SetBudgetExpensePiecesTransportationQuantity] = useState('')
  const [budget_expense_pieces_transportation_amount, SetBudgetExpensePiecesTransportationAmount] = useState('')
  const [budget_expense_pieces_transportation_subtotal, SetBudgetExpensePiecesTransportationSubtotal] = useState('')    
  const [budget_expense_pieces_accommodation_quantity, SetBudgetExpensePiecesAccommodationQuantity] = useState('')
  const [budget_expense_pieces_accommodation_amount, SetBudgetExpensePiecesAccommodationAmount] = useState('')
  const [budget_expense_pieces_accommodation_subtotal, SetBudgetExpensePiecesAccommodationSubtotal] = useState('')    
  const [budget_expense_pieces_miscellaneous_quantity, SetBudgetExpensePiecesMiscellaneousQuantity] = useState('')
  const [budget_expense_pieces_miscellaneous_amount, SetBudgetExpensePiecesMiscellaneousAmount] = useState('')
  const [budget_expense_pieces_miscellaneous_subtotal, SetBudgetExpensePiecesMiscellaneousSubtotal] = useState('')    
  const [budget_expense_pieces_fees_quantity, SetBudgetExpensePiecesFeesQuantity] = useState('')
  const [budget_expense_pieces_fees_amount, SetBudgetExpensePiecesFeesAmount] = useState('')
  const [budget_expense_pieces_fees_subtotal, SetBudgetExpensePiecesFeesSubtotal] = useState('')    
  const [budget_expense_pieces_food_quantity, SetBudgetExpensePiecesFoodQuantity] = useState('')
  const [budget_expense_pieces_food_amount, SetBudgetExpensePiecesFoodAmount] = useState('')
  const [budget_expense_pieces_food_subtotal, SetBudgetExpensePiecesFoodSubtotal] = useState('')    
  const [budget_expense_pieces_rental_quantity, SetBudgetExpensePiecesRentalQuantity] = useState('')
  const [budget_expense_pieces_rental_amount, SetBudgetExpensePiecesRentalAmount] = useState('')
  const [budget_expense_pieces_rental_subtotal, SetBudgetExpensePiecesRentalSubtotal] = useState('')    
  const [budget_expense_pieces_total, SetBudgetExpensePiecesTotal] = useState('')
  const [budgets, SetBudgets] = useState([])

useEffect(() => {
    const fetchData = async () => {
      const datos = await fetchBudgets.getBudgets();
      SetBudgets(datos);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const marketingSubtotal = (parseFloat(budget_expense_pieces_marketing_quantity) || 0) * (parseFloat(budget_expense_pieces_marketing_amount) || 0);
    const productionSubtotal = (parseFloat(budget_expense_pieces_production_quantity) || 0) * (parseFloat(budget_expense_pieces_production_amount) || 0);
    const costumeSubtotal = (parseFloat(budget_expense_pieces_costume_quantity) || 0) * (parseFloat(budget_expense_pieces_costume_amount) || 0);
    const setDesignSubtotal = (parseFloat(budget_expense_pieces_set_design_quantity) || 0) * (parseFloat(budget_expense_pieces_set_design_amount) || 0);
    const artDesignSubtotal = (parseFloat(budget_expense_pieces_art_design_quantity) || 0) * (parseFloat(budget_expense_pieces_art_design_amount) || 0);
    const musicSubtotal = (parseFloat(budget_expense_pieces_music_quantity) || 0) * (parseFloat(budget_expense_pieces_music_amount) || 0);
    const lightingSubtotal = (parseFloat(budget_expense_pieces_lighting_quantity) || 0) * (parseFloat(budget_expense_pieces_lighting_amount) || 0);
    const soundSubtotal = (parseFloat(budget_expense_pieces_sound_quantity) || 0) * (parseFloat(budget_expense_pieces_sound_amount) || 0);
    const transportationSubtotal = (parseFloat(budget_expense_pieces_transportation_quantity) || 0) * (parseFloat(budget_expense_pieces_transportation_amount) || 0);
    const accommodationSubtotal = (parseFloat(budget_expense_pieces_accommodation_quantity) || 0) * (parseFloat(budget_expense_pieces_accommodation_amount) || 0);
    const miscellaneousSubtotal = (parseFloat(budget_expense_pieces_miscellaneous_quantity) || 0) * (parseFloat(budget_expense_pieces_miscellaneous_amount) || 0);
    const feesSubtotal = (parseFloat(budget_expense_pieces_fees_quantity) || 0) * (parseFloat(budget_expense_pieces_fees_amount) || 0);
    const foodSubtotal = (parseFloat(budget_expense_pieces_food_quantity) || 0) * (parseFloat(budget_expense_pieces_food_amount) || 0);
    const rentalSubtotal = (parseFloat(budget_expense_pieces_rental_quantity) || 0) * (parseFloat(budget_expense_pieces_rental_amount) || 0);

    SetBudgetExpensePiecesMarketingSubtotal(marketingSubtotal.toFixed(2));
    SetBudgetExpensePiecesProductionSubtotal(productionSubtotal.toFixed(2));
    SetBudgetExpensePiecesCostumeSubtotal(costumeSubtotal.toFixed(2));
    SetBudgetExpensePiecesSetDesignSubtotal(setDesignSubtotal.toFixed(2));
    SetBudgetExpensePiecesArtDesignSubtotal(artDesignSubtotal.toFixed(2));
    SetBudgetExpensePiecesMusicSubtotal(musicSubtotal.toFixed(2));
    SetBudgetExpensePiecesLightingSubtotal(lightingSubtotal.toFixed(2));
    SetBudgetExpensePiecesSoundSubtotal(soundSubtotal.toFixed(2));
    SetBudgetExpensePiecesTransportationSubtotal(transportationSubtotal.toFixed(2));
    SetBudgetExpensePiecesAccommodationSubtotal(accommodationSubtotal.toFixed(2));
    SetBudgetExpensePiecesMiscellaneousSubtotal(miscellaneousSubtotal.toFixed(2));
    SetBudgetExpensePiecesFeesSubtotal(feesSubtotal.toFixed(2));
    SetBudgetExpensePiecesFoodSubtotal(foodSubtotal.toFixed(2));
    SetBudgetExpensePiecesRentalSubtotal(rentalSubtotal.toFixed(2));

    const total = marketingSubtotal + productionSubtotal + costumeSubtotal + setDesignSubtotal + artDesignSubtotal 
    + musicSubtotal + lightingSubtotal + soundSubtotal + transportationSubtotal + accommodationSubtotal + miscellaneousSubtotal 
    + feesSubtotal + foodSubtotal + rentalSubtotal;
    SetBudgetExpensePiecesTotal(total.toFixed(2));
  },[
    budget_expense_pieces_marketing_quantity,     
        budget_expense_pieces_marketing_amount,    
        budget_expense_pieces_production_quantity, 
        budget_expense_pieces_production_amount,   
        budget_expense_pieces_costume_quantity,
        budget_expense_pieces_costume_amount, 
        budget_expense_pieces_set_design_quantity,
        budget_expense_pieces_set_design_amount, 
        budget_expense_pieces_art_design_quantity,
        budget_expense_pieces_art_design_amount,
        budget_expense_pieces_music_quantity, 
        budget_expense_pieces_music_amount, 
        budget_expense_pieces_lighting_quantity, 
        budget_expense_pieces_lighting_amount, 
        budget_expense_pieces_sound_quantity, 
        budget_expense_pieces_sound_amount,
        budget_expense_pieces_transportation_quantity,  
        budget_expense_pieces_transportation_amount,    
        budget_expense_pieces_accommodation_quantity,
        budget_expense_pieces_accommodation_amount,
        budget_expense_pieces_miscellaneous_quantity, 
        budget_expense_pieces_miscellaneous_amount, 
        budget_expense_pieces_fees_quantity,
        budget_expense_pieces_fees_amount, 
        budget_expense_pieces_food_quantity, 
        budget_expense_pieces_food_amount, 
        budget_expense_pieces_rental_quantity,
        budget_expense_pieces_rental_amount
]);

const handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
        budgets,
        budget_expense_pieces_name,
        budget_expense_pieces_year,
        budget_expense_pieces_marketing_quantity,     
        budget_expense_pieces_marketing_amount,
        budget_expense_pieces_marketing_subtotal,    
        budget_expense_pieces_production_quantity, 
        budget_expense_pieces_production_amount, 
        budget_expense_pieces_production_subtotal,  
        budget_expense_pieces_costume_quantity,
        budget_expense_pieces_costume_amount, 
        budget_expense_pieces_costume_subtotal, 
        budget_expense_pieces_set_design_quantity,
        budget_expense_pieces_set_design_amount, 
        budget_expense_pieces_set_design_subtotal, 
        budget_expense_pieces_art_design_quantity,
        budget_expense_pieces_art_design_amount,
        budget_expense_pieces_art_design_subtotal,
        budget_expense_pieces_music_quantity, 
        budget_expense_pieces_music_amount, 
        budget_expense_pieces_music_subtotal, 
        budget_expense_pieces_lighting_quantity, 
        budget_expense_pieces_lighting_amount, 
        budget_expense_pieces_lighting_subtotal, 
        budget_expense_pieces_sound_quantity, 
        budget_expense_pieces_sound_amount,
        budget_expense_pieces_sound_subtotal,
        budget_expense_pieces_transportation_quantity,  
        budget_expense_pieces_transportation_amount,    
        budget_expense_pieces_transportation_subtotal,    
        budget_expense_pieces_accommodation_quantity,
        budget_expense_pieces_accommodation_amount,
        budget_expense_pieces_accommodation_subtotal,
        budget_expense_pieces_miscellaneous_quantity, 
        budget_expense_pieces_miscellaneous_amount, 
        budget_expense_pieces_miscellaneous_subtotal, 
        budget_expense_pieces_fees_quantity,
        budget_expense_pieces_fees_amount, 
        budget_expense_pieces_fees_subtotal, 
        budget_expense_pieces_food_quantity, 
        budget_expense_pieces_food_amount, 
        budget_expense_pieces_food_subtotal,
        budget_expense_pieces_rental_quantity,
        budget_expense_pieces_rental_amount,
        budget_expense_pieces_rental_subtotal,
        budget_expense_pieces_total
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
                            <td><input className='inpBExp' value={budget_expense_pieces_marketing_subtotal} onChange={(e)=>SetBudgetExpensePiecesMarketingSubtotal(e.target.value)} type="subtot mark"/></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Producción</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_production_quantity} onChange={(e)=>SetBudgetExpensePiecesProductionQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_production_amount} onChange={(e)=>SetBudgetExpensePiecesProductionAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_production_subtotal} onChange={(e)=>SetBudgetExpensePiecesProductionSubtotal(e.target.value)}type="subtot pro" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Vestuario</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_quantity} onChange={(e)=>SetBudgetExpensePiecesCostumeQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_amount} onChange={(e)=>SetBudgetExpensePiecesCostumeAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_costume_subtotal} onChange={(e)=>SetBudgetExpensePiecesCostumeSubtotal(e.target.value)}type="subtot cos" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Escenografía</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_quantity} onChange={(e)=>SetBudgetExpensePiecesSetDesignQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_amount} onChange={(e)=>SetBudgetExpensePiecesSetDesignAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_set_design_subtotal} onChange={(e)=>SetBudgetExpensePiecesSetDesignSubtotal(e.target.value)}type="subtot set" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Diseño gráfico</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_quantity} onChange={(e)=>SetBudgetExpensePiecesArtDesignQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_amount} onChange={(e)=>SetBudgetExpensePiecesArtDesignAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_art_design_subtotal} onChange={(e)=>SetBudgetExpensePiecesArtDesignSubtotal(e.target.value)}type="subtot art" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Música</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_music_quantity} onChange={(e)=>SetBudgetExpensePiecesMusicQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_music_amount} onChange={(e)=>SetBudgetExpensePiecesMusicAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_music_subtotal} onChange={(e)=>SetBudgetExpensePiecesMusicSubtotal(e.target.value)}type="subtot mus" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Iluminación</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_quantity} onChange={(e)=>SetBudgetExpensePiecesLightingQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_amount} onChange={(e)=>SetBudgetExpensePiecesLightingAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_lighting_subtotal} onChange={(e)=>SetBudgetExpensePiecesLightingSubtotal(e.target.value)}type="subtot lig" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Sonido</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_quantity} onChange={(e)=>SetBudgetExpensePiecesSoundQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_amount} onChange={(e)=>SetBudgetExpensePiecesSoundAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_sound_subtotal} onChange={(e)=>SetBudgetExpensePiecesSoundSubtotal(e.target.value)}type="subtot sou" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Transporte</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_quantity} onChange={(e)=>SetBudgetExpensePiecesTransportationQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_amount} onChange={(e)=>SetBudgetExpensePiecesTransportationAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_transportation_subtotal} onChange={(e)=>SetBudgetExpensePiecesTransportationSubtotal(e.target.value)}type="subtot trans" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Hospedaje</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_quantity} onChange={(e)=>SetBudgetExpensePiecesAccommodationQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_amount} onChange={(e)=>SetBudgetExpensePiecesAccommodationAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_accommodation_subtotal} onChange={(e)=>SetBudgetExpensePiecesAccommodationSubtotal(e.target.value)}type="subtot acc" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Misceláneos</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_quantity} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_amount} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_miscellaneous_subtotal} onChange={(e)=>SetBudgetExpensePiecesMiscellaneousSubtotal(e.target.value)}type="subtot misc" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Honorarios</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_quantity} onChange={(e)=>SetBudgetExpensePiecesFeesQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_amount} onChange={(e)=>SetBudgetExpensePiecesFeesAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_fees_subtotal} onChange={(e)=>SetBudgetExpensePiecesFeesSubtotal(e.target.value)}type="subtot fee" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Alimentación</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_food_quantity} onChange={(e)=>SetBudgetExpensePiecesFoodQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_food_amount} onChange={(e)=>SetBudgetExpensePiecesFoodAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_food_subtotal} onChange={(e)=>SetBudgetExpensePiecesFoodSubtotal(e.target.value)}type="subtot food" /></td>
                        </tr>
                        <tr>
                            <td className='tdBExp'>Alquileres</td>
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_quantity} onChange={(e)=>SetBudgetExpensePiecesRentalQuantity(e.target.value)} type="cant pat" placeholder='Ingrese cantidad'/></td>
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_amount} onChange={(e)=>SetBudgetExpensePiecesRentalAmount(e.target.value)}type="mont $ pat" placeholder='Ingrese monto' /></td>                          
                            <td><input className='inpBExp' value={budget_expense_pieces_rental_subtotal} onChange={(e)=>SetBudgetExpensePiecesRentalSubtotal(e.target.value)}type="subtot alq" /></td>
                        </tr>
                    </table><br />
                    <div className='btnsBExp'>
                        <button type='button' onClick={handleSubmit} className='btnBExp'>Cargar ingresos</button><br /><br />
                        <button type='button' onClick={handleSubmit} className='btnBExp'>Editar ingresos</button><br /><br />
                    </div><br />
                    <div>
                        <label className='labelBExp'>Total de egresos</label>
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