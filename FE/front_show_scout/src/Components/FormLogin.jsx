import React, { useState, useEffect } from 'react'
import '../Styles/FormLogin.css'
import { Link, useNavigate } from 'react-router-dom'
import llamadosUsuarios from '../Services/llamadosUsuarios'
import Cabritas from '../assets/img/CabritasClr.gif'

function FormLogin() {

  const [nombreUsuario,  SetNombreUsuario] = useState("")
  const [passwordUsuario, SetPasswordUsuario] = useState("")
  const [usuarios, SetUsuarios] = useState([])
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await llamadosUsuarios.getUsuarios()
      SetUsuarios(datos)
    };

    fetchDataUsers();
  }, []);

   function nombre(evento) {
    SetNombreUsuario(evento.target.value)
   }
   
   function password(evento) {
     SetPasswordUsuario(evento.target.value)
   }

   function Iniciar() { 

    const registrado = usuarios.filter(usuario => usuario.usuario === nombreUsuario && usuario.password === passwordUsuario)
    
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
            <input className='inp' value={nombreUsuario} placeholder="Nombre" required onChange={nombre} type="text"/><br /><br />
            <input className='inp' value={passwordUsuario} placeholder="Contraseña" required onChange={password} type="password" /><br /><br />
            <button onClick={Iniciar} className='btnIniciar'>Iniciar</button><br /><br />
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