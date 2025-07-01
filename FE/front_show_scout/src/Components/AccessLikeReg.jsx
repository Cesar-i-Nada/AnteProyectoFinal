import React from 'react'
import '../Styles/AccessLikeReg.css'
import { Link } from 'react-router-dom'


function AccessLikeReg() {
  
  return (
    <div className='cajaAccessLikeReg'>

      <h3 className='tituloAccessLikeReg'>Ingresar como</h3><br />

      <p className='titleSelectCatR'>Seleccione la categoría con la que desea ingresar</p><br />

        <div className="flex-container">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button  className='abcR'><Link to ="/ProfileUForm" className="myButtonL">Artista</Link></button>

          </div><br />
          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button  className='abcR'><Link to ="/ProfileCForm" className="myButtonL">Compañía</Link></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abcR'><Link to ="/ProfileOForm" className="myButtonL">Organización</Link></button>

          </div>
          
        </div>
        
    </div>

  )
}

export default AccessLikeReg