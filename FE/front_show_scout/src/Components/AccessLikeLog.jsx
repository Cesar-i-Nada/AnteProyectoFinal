import React from 'react'
import '../Styles/AccessLikeLog.css'
import { Link } from 'react-router-dom'


function AccessLikeLog() {
  
  return (
    <div>
    
      <div className='titleSelectCatL'>
        <p>Seleccione la categoría con la que deseas trabajar </p>
      </div>

      <div className='cajaAccessLikeLog'>
          <div className="flex-containerL">
            <div>
              <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
              <button className='abcL'><Link to="/ProfileUPage" className="myButtonL">Usuario</Link></button>
            </div><br />

            <div>
              <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
              <button className='abcL'><Link to ="/ProfileCPage" className="myButtonL">Compañía</Link></button>
            </div><br />
            
            <div>
              <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
              <button  className='abcL'><Link to ="/ProfileOPage" className="myButtonL">Organización</Link></button>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default AccessLikeLog