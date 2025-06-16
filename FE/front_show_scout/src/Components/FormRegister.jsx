import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FormRegister.css'
import Cabritas from '../assets/img/CabritasClr.gif'
import fetchUsers from '../Services/fetchUsers'


function FormRegister() {

const [username,  SetUsername] = useState("")
const [userPassword, SetUserPassword] = useState("")
const [userEmail, SetUserEmail] = useState("")


 function CrearRegistro() {
    const objUsuario ={
        username: username,
        user_password: userPassword,
        user_email: userEmail
    }

   fetchUsers.postUsers(objUsuario)

}
      
return (
<div>

  <div className='containerR'>

    <div className='espRegister'>
      <h1 className='tituloR'>Registrese</h1>
      <p className='tituloR'>para comenzar su viaje en la creación de obras escénicas</p><br />
      <input className='inpR'  placeholder="Alias" required onChange={(e)=>SetUsername(e.target.value)} type="text"/><br /><br />   
      <input className='inpR'  placeholder="Correo electrónico" required onChange={(e)=>SetUserEmail(e.target.value)} type="email" /><br /><br />
      <input className='inpR'  placeholder="Contraseña" required onChange={(e)=>SetUserPassword(e.target.value)} type="password"/><br /><br />
      <button onClick={CrearRegistro} className='btnRegistrar'>Registrarse</button><br /><br />
      <Link to={"/"}>Ir a Login</Link>
    </div>

    <div>
      <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
    </div>

  </div>

</div>
  );
};

export default FormRegister