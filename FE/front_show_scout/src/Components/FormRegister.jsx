import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FormRegister.css'
import Cabritas from '../assets/img/CabritasClr.gif'
import fetchUsers from '../Services/fetchUsers'


function FormRegister() {

const [username,  SetUsername] = useState("")
const [passwordUser, SetPasswordUser] = useState("")
const [emailUser, SetEmailUser] = useState("")


function username(evento) {
 SetUsername(evento.target.value)
}

function passwordUser(evento) {
  SetPasswordUser(evento.target.value)
}

function emailUser(evento) {
  SetEmailUser(evento.target.value)
}
 function CrearRegistro() {
    const objUsuario ={
        username: username,
        password: passwordUser,
        email: emailUser
    }

   fetchUsers.postUsers(objUsuario)

}
      
return (
<div>

  <div className='container'>

    <div className='espRegister'>
      <h1 className='titulo'>Registrese</h1>
      <p className='titulo'>para comenzar su viaje en la creación de obras escénicas</p><br />
      <input className='inp' value={nombreUsuario} placeholder="Nombre" required onChange={nombre} type="text"/><br /><br />   
      <input className='inp' value={emailUsuario} placeholder="Email" required onChange={email} type="email" /><br /><br />
      <input className='inp' value={passwordUsuario} placeholder="Password" required onChange={password} type="password"/><br /><br />
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