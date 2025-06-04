import React from 'react'
import '../Styles/AccessLikeReg.css'
import {} from 'react-router-dom'
import catUser from '../assets/img/catUser.png'
import catComp from '../assets/img/catComp.png'
import catOrg from '../assets/img/catOrg.png'


function AccessLikeReg() {
  return (
    <div>
      <div className='cajaAccessLikeReg'>
        <h3 className='tituloAccessLikeReg'>Ingresar como</h3><br />
        <p className='categoria'>Seleccione la categoría con la que desea ingresar</p><br />
      
      <div className='categoriasImg'>
        <div>
        <img className='btnIngresarComoA' src="src/assets/img/catUser.png"/>
          <p>Artista
        <input className='check' type="checkbox" /></p>
        </div>
        <div>
        <img className='btnIngresarComoC' src="src/assets/img/catComp.png"/>
          <p>Compañía
        <input className='check' type="checkbox" /></p>
        </div>   
        <div>
        <img className='btnIngresarComoO' src="src/assets/img/catOrg.png"/>
          <p>Organización
        <input className='check' type="checkbox" /></p>
        </div>
          
        </div>
      </div>

    </div>
  )
}

export default AccessLikeReg