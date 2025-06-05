import React from 'react'
import '../Styles/AccessLikeLog.css'
import {} from 'react-router-dom'


function AccessLikeLog() {
  
  return (
    <div className='cajaAccessLikeLog'>

      <h3 className='tituloAccessLikeLog'>Ingresar como</h3><br />

      <p className='titleSelectCat'>Seleccione la categoría con la que deseas trabajar </p><br />

        <div className="flex-container">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button className='abc'><a href="#" class="myButton">Usuario</a></button>

          </div><br />
          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button className='abc'><a href="#" class="myButton">Compañía</a></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abc'><a href="#" class="myButton">Organización</a></button>
          </div>
          
        </div>
        
    </div>

  )
}

export default AccessLikeLog