import React from 'react'
import '../Styles/AboutUs.css'
import { Link } from 'react-router-dom'


function AboutUs() {
  
  return (
    <div className='cajaAboutUs'>

      <h3 className='tituloAboutUs'>Ingresar como</h3><br />

      <p className='titleSelectAbout'>Seleccione la categoría con la que deseas trabajar </p><br />

        <div className="flex-containerAbout">
          <div>
            <img src="src/assets/img/catUser.png" alt="Categoría de usuario" width={300} height={300}/>
            <button className='abcAbout'><Link to="#" className="myButtonAbout">Usuario</Link></button>
          </div><br />

          <div>
            <img src="src/assets/img/catComp.png" alt="Categoría de compañía" width={300} height={300}/>
            <button className='abcAbout'><Link to ="#" className="myButtonAbout">Compañía</Link></button>
          </div><br />
          
          <div>
            <img src="src/assets/img/catOrg.png" alt="Categoría de Organización" width={300} height={300}/>
            <button  className='abcAbout'><Link to ="#" className="myButtonAbout">Organización</Link></button>
          </div>
          
        </div>
        
    </div>

  )
}

export default AboutUs