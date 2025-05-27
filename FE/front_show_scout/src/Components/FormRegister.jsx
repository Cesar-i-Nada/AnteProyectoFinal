import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/FormRegister.css'
import Cabritas from '../assets/img/CabritasClr.gif'
import fetchUsers from '../Services/fetchUsers'


function FormRegister() {

const [username,  SetUsername] = useState("")
const [passwordUser, SetPasswordUser] = useState("")
const [emailUser, SetEmailUser] = useState("")


function chargeUsername(evento) {
 SetUsername(evento.target.value)
}

function chargePasswordUser(evento) {
  SetPasswordUser(evento.target.value)
}

function chargeEmailUser(evento) {
  SetEmailUser(evento.target.value)
}
 function CrearRegistro() {
    const objUsuario ={
        username: chargeUsername,
        password: chargePasswordUser,
        email: chargeEmailUser
    }

   fetchUsers.postUsers(objUsuario)

}
      
return (
<div>

  <div className='container'>

    <div className='espRegister'>
      <h1 className='titulo'>Registrese</h1>
      <p className='titulo'>para comenzar su viaje en la creación de obras escénicas</p><br />
      <input className='inp' value={chargeUsername} placeholder="Nombre" required onChange={username} type="text"/><br /><br />   
      <input className='inp' value={chargeEmailUser} placeholder="Email" required onChange={emailUser} type="email" /><br /><br />
      <input className='inp' value={chargePasswordUser} placeholder="Password" required onChange={passwordUser} type="password"/><br /><br />
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