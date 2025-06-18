import React, { useState, useEffect } from 'react'
import '../Styles/FormLogin.css'
import { Link, useNavigate} from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'
import Cabritas from '../assets/img/CabritasClr.gif'

function FormLogin() {
  
  const [username,  SetUsername] = useState("")
  const [userPassword, SetUserPassword] = useState("")
  const [users, SetUsers] = useState([])
  
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await fetchUsers.getUsers()
      SetUsers(datos)
    };

    fetchDataUsers();
  }, []);

function Start() { 

    const registered = users.filter(user => user.user === username && user.password === userPassword)
    
    console.log(registered);
    
    if (registered.length === 0) {
      console.log('Usuario no registrado');
      return;
    } 
    
    const usuarioEncontrado = registered [0]; 
    
      //validar si ya hizo perfil
    if (usuarioEncontrado.perfilCreado) {
      console.log('El usuario está registrado, por lo que puede ingresar');
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      navigate('/AccessLikeL');
    }else{
      console.log('El usuario aún no ha creado un perfil');  
      localStorage.setItem("usuario",JSON.stringify(usuarioEncontrado))
      navigate('/Register')
    }
   }

return (
<div>
    
    <div className="containerL">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espLogin'>
            <p className='textLogin'>Lleve su producción <br /> por buen camino</p><br />
            <input className='inpL' placeholder="Alias" required onChange={(e)=>SetUsername(e.target.value)}type="text"/><br /><br />
            <input className='inpL' placeholder="Contraseña" required onChange={(e)=>SetUserPassword(e.target.value)} type="password" /><br /><br />
            <button onClick={Start} className='btnIniciarL'>Iniciar</button><br /><br />
            <p>¿Ya tienes una cuenta? <Link to = "/Register">Ir a registrarse</Link></p>      
          </div>
        </div>

      </div>

        <div className="textDivL">
          <h1>Herramientas para producir danza, teatro o circo.</h1>
        </div>

      <div className="containerL">

        <div>
            <p className='segundoTextoL'>Mejora los procesos de producción </p><br />
            <p className='contSegundoTextoL'>Esta herramienta es útil y práctica para tus creaciones de arte escénico</p>
        </div>

        <div>
        <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   

        </div>  
    </div>
        
    <div>
        <div className="footer"><h3>Contáctenos</h3>
        <div>
            <h4>ShowScout@gmail.com</h4>
            <a className="cierre" href="/">Cerrar sesión</a></div>
        </div>
    </div>

</div>
  
    );
  };
  
export default FormLogin