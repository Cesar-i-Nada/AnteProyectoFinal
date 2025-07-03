import React from 'react'
import '../Styles/AccessLikeLog.css'
import { Link, useNavigate } from 'react-router-dom'


function AccessLikeLog() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    
    navigate('/');
  };
  
  return (
    <div>

      <div className="containerXAccL">
        <button className="buttonXAccL" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    
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