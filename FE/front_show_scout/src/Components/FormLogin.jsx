import React, { useState, useEffect } from 'react'
import '../Styles/FormLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'
import Cabritas from '../assets/img/CabritasClr.gif'

function FormLogin() {

  const [username,  SetUsername] = useState("")
  const [passwordUser, SetPasswordUser] = useState("")
  const [users, SetUsers] = useState([])
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await fetchUsers.getUsers()
      SetUsers(datos)
    };

    fetchDataUsers();
  }, []);

   function chargeUsername(evento) {
    SetUsername(evento.target.value)
   }
   
   function chargePasswordUser(evento) {
     SetPasswordUser(evento.target.value)
   }

   function Start() { 

    const registrado = users.filter(user => user.user === username && user.password === passwordUser)
    
    console.log(registrado);

 
    
    if (registrado.length === 0) {
      console.log('Usuario no registrado');
      return;
    } 
    
    const usuarioEncontrado = registrado [0]; 
    
      //validar si ya hizo perfil
    if (usuarioEncontrado.perfilCreado) {
      console.log('El usuario está registrado, por lo que puede ingresar');
      localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
      navigate('/SynchroMap');
    }else{
      console.log('El usuario aún no ha creado un perfil');  
      localStorage.setItem("usuario",JSON.stringify(usuarioEncontrado))
      navigate('/CreateProfile')
    }

    
   }

return (
<div>
    
    
    <div className="container">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espLogin'>
            <p className='textLogin'>Lleve su producción <br /> por buen camino</p><br />
            <input className='inp' value={chargeUsername} placeholder="Nombre" required onChange={username} type="text"/><br /><br />
            <input className='inp' value={chargePasswordUser} placeholder="Contraseña" required onChange={passwordUser} type="password" /><br /><br />
            <button onClick={Start} className='btnIniciar'>Iniciar</button><br /><br />
            <p>¿Ya tienes una cuenta? <Link to = "/Register">Ir a registrarse</Link></p>      
          </div>
        </div>

      </div>


        <div className="textDiv">
          <h1>Herramientas para producir danza, teatro o circo.</h1>
        </div>

      <div className="container">

        <div>
            <p className='segundoTexto'>Mejora los procesos de producción </p><br />
            <p className='contSegundoTexto'>Esta herramienta es útil y práctica para tus creaciones de arte escénico</p>
        </div>

        <div>
        <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   

        </div>  
    </div>
        
    <div>
        <div class="footer"><h3>Contáctenos</h3>
        <div>
            <h4>ShowScout@gmail.com</h4>
            <a class="cierre" href="login/login.html">Cerrar sesión</a></div>
        </div>
    </div>

</div>
  
    );
  };
  

export default FormLogin