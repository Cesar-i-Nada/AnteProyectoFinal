import React from 'react'
import '../Styles/AboutUs.css'
import { Link, useNavigate } from 'react-router-dom'

function AboutUs() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    
    navigate('/');
  };

  return (
    <div>
      
      <div className="logout-container">
        <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
      </div>

      <div>
        <p className='tituloAboutUs'>Show Scout ofrece</p><br />
      </div>
      <div>
        <p className='titleSelectAbout'>herramientas para mejorar los procesos de producción de obras </p><br />
      </div>
      <div className='cajaAboutUs'>
        <div className="flex-containerAbout">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button className='abcAbout'><Link to="#" className="myButtonAbout">Danza</Link></button>
          </div><br />

          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button className='abcAbout'><Link to ="#" className="myButtonAbout">Teatro</Link></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abcAbout'><Link to ="#" className="myButtonAbout">Circo</Link></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
