import React from 'react'
import '../Styles/AccessLikeReg.css'
import {} from 'react-router-dom'


function AccessLikeReg() {
  
  return (
    <div className='cajaAccessLikeReg'>

      <h3 className='tituloAccessLikeReg'>Ingresar como</h3><br />

      <p className='titleSelectCat'>Seleccione la categoría con la que desea ingresar</p><br />

        <div className="flex-container">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button className='abc'><a href="#" className="myButtonR">Usuario</a></button>

          </div><br />
          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button className='abc'><a href="#" className="myButtonR">Compañía</a></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abc'><a href="#" className="myButtonR">Organización</a></button>
          </div>
          
        </div>
        
    </div>

  )
}

export default AccessLikeReg