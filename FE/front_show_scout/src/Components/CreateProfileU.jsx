import React, { useState, useEffect } from 'react'
import '../Styles/CreateProfileU.css'
import { useNavigate } from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'

function CreateProfileU() {

  const [username,  SetUsername] = useState("")
  const [user_password, SetUserPassword] = useState("")
  const [user_first_name, SetUserFirstName] = useState("")
  const [user_last_name, SetUserLastName] = useState("")    
  const [user_email, SetUserEmail] = useState("")
  const [user_age, SetUserAge] = useState(0)
  const [user_phone, SetUserPhone] = useState("")
  const [user_country, SetUserCountry] = useState("")
  const [user_address, SetUserAddress] = useState("")
  const [user_type_profile, SetUserTypeProfile] = useState("")
  const [user_website, SetUserWebsite] = useState("")
  const [user_social_media, SetUserSocialMedia] = useState("")
  const [users, SetUsers] = useState([])
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataUsers() {

      const datos = await fetchUsers.getUsers()
      SetUsers(datos)
    };

    fetchDataUsers();
  }, []);

function Create() { 

  const registered = users.filter(user => user.username === username && user.userPassword === user_password)
    
    console.log(registered);
    
    if (registered.length === 0) {
      console.log('Usuario no registrado');
      return;
    } 
    
    const usuarioEncontrado = registered [0]; 
    
      //valida si el  perfil ya se realizó
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
          <div className='espCreateU'>
            <p className='textCreateU'>Cree su perfil</p><br />
            <input className='inp' value={username} onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder='Alias'/>
            <input className='inp' value={user_password} onChange={(e)=>SetUserPassword(e.target.value)} type="text" placeholder='Contraseña'/>
            <input className='inp' value={user_first_name} onChange={(e)=>SetUserFirstName(e.target.value)} type="text" placeholder='Nombre'/>
            <input className='inp' value={user_last_name} onChange={(e)=>SetUserLastName(e.target.value)} type="text" placeholder='Apellido'/>
            <input className='inp' value={user_email} onChange={(e)=>SetUserEmail(e.target.value)} type="text" placeholder='Correo'/>
            <input className='inp' value={user_age} onChange={(e)=>SetUserAge(e.target.value)} type="text" placeholder='Edad'/>
            <input className='inp' value={user_phone} onChange={(e)=>SetUserPhone(e.target.value)} type="text" placeholder='Teléfono'/>
            <input className='inp' value={user_country} onChange={(e)=>SetUserCountry(e.target.value)} type="text" placeholder='País'/>
            <input className='inp' value={user_address} onChange={(e)=>SetUserAddress(e.target.value)} type="text" placeholder='Dirección'/>
            <input className='inp' value={user_type_profile} onChange={(e)=>SetUserTypeProfile(e.target.value)} type="text" placeholder='Tipo de perfil'/>
            <input className='inp' value={user_website} onChange={(e)=>SetUserWebsite(e.target.value)} type="text" placeholder='Sitio Web'/>
            <input className='inp' value={user_social_media} onChange={(e)=>SetUserSocialMedia(e.target.value)} type="text" placeholder='Redes sociales'/>
            <button onClick={Create} className='btnIniciar'>Crear</button><br /><br />
          </div>
        </div>

      </div>

</div>
  
    );
  };
  
export default CreateProfileU