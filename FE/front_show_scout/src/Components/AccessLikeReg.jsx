import React from 'react'
import '../Styles/AccessLikeReg.css'
import {} from 'react-router-dom'


function AccessLikeReg() {
  return (
  <div className='cajaAccessLikeReg'>

<h3 className='tituloAccessLikeReg'>Ingresar como</h3>

<p className='titleSelectCat'>Seleccione la categoría con la que desea ingresar</p>

    <div className="flex-container">
      <div>
        <img src="src/assets/img/catUser.png" alt="Categoría de usuario"/>
      </div>
      <div>
        <img src="src/assets/img/catComp.png" alt="Categoría de compañía"/>
      </div>
      <div>
        <img src="src/assets/img/catOrg.png" alt="Categoría de organización"/>
      </div>  
    </div>

</div>
  )
}

export default AccessLikeReg