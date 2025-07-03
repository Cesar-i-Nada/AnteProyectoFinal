import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/FormRegister.css';
import Cabritas from '../assets/img/CabritasClr.gif';
import fetchUsers from '../Services/fetchUsers';

function FormRegister() {
  const [username, SetUsername] = useState("");
  const [userPassword, SetUserPassword] = useState("");
  const [userEmail, SetUserEmail] = useState("");
  const navigate = useNavigate();

  function CrearRegistro() {
    const objUsuario = { username, user_password: userPassword, user_email: userEmail };
    fetchUsers.postUsers(objUsuario)
      .then(response => {
        console.log("Usuario registrado:", response);
        // enviar correo y contraseña por state
        navigate("/AccessLikeR", { state: { username, userEmail, userPassword } });
      })
      .catch(error => {
        console.error("Error al registrar usuario:", error);
        alert("Error al registrarse. Por favor, intente nuevamente.");
      });
  }

  return (
    <div className='containerR'>
      <div className='espRegister'>
        <h1 className='tituloR'>Regístrese</h1>
        <p className='tituloR'>para comenzar su viaje en la creación de obras escénicas</p><br/><br />
        <input className='inpR' placeholder="Alias" required onChange={e => SetUsername(e.target.value)} /> <br /> <br />
        <input className='inpR' placeholder="Correo electrónico" required onChange={e => SetUserEmail(e.target.value)} /> <br /><br />
        <input className='inpR' placeholder="Contraseña" required onChange={e => SetUserPassword(e.target.value)} /> <br /><br />
        <button onClick={CrearRegistro} className='btnRegistrar'>Registrarse</button><br />
        <Link to={"/"}>Ir a Login</Link>
      </div>
      <img className='Cabritas' src={Cabritas} alt="Cabritas" />
    </div>
  );
}

export default FormRegister;
