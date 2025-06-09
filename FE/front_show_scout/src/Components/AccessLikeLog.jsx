import React from 'react'
import '../Styles/AccessLikeLog.css'
import { Link } from 'react-router-dom'


function AccessLikeLog() {
  
  return (
    <div className='cajaAccessLikeLog'>

      <h3 className='tituloAccessLikeLog'>Ingresar como</h3><br />

      <p className='titleSelectCat'>Seleccione la categoría con la que deseas trabajar </p><br />

        <div className="flex-container">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button className='abc'><Link to="/CreateProfileU" className="myButtonL">Usuario</Link></button>
          </div><br />

          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button className='abc'><Link to ="/CreateProfileC" className="myButtonL">Compañía</Link></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abc'><Link to ="/CreateProfileO" className="myButtonL">Organización</Link></button>
          </div>
          
        </div>
        
    </div>

  )
}

export default AccessLikeLog