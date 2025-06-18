import React, { useState, useEffect, } from 'react'
import '../Styles/CreateProfileU.css'
import { useNavigate } from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'


function CreateProfileU() {

  const [username,  SetUsername] = useState("")
  const [user_password, SetUserPassword] = useState("")
  const [user_first_name, SetUserFirstName] = useState("")
  const [user_last_name, SetUserLastName] = useState("")    
  const [user_email, SetUserEmail] = useState("")
  const [user_age, SetUserAge] = useState("")
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

const Object = {
  user: 'username',
  user_first_name: "user_first_name",
  user_last_name: "user_last_name",
  user_email: "user_email",
  user_password: "user_password",
  user_age: "user_age",
  user_phone: "user_phone",
  user_country: "user_country",
  user_address: "user_addreess",
  user_type_profile: "user_type_profile",
  user_website: "user_website",
  user_social_media: "user_social_media",
  }

  
return (

<div>
    
    <div className="containerU">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espCreateU'>
            <p className='textCreateU'>Cree su perfil</p><br />
            <input className='inpU' value={username} onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder='Alias'/>
            <input className='inpU' value={user_password} onChange={(e)=>SetUserPassword(e.target.value)} type="text" placeholder='Contraseña'/>
            <input className='inpU' value={user_first_name} onChange={(e)=>SetUserFirstName(e.target.value)} type="text" placeholder='Nombre'/>
            <input className='inpU' value={user_last_name} onChange={(e)=>SetUserLastName(e.target.value)} type="text" placeholder='Apellido'/>
            <input className='inpU' value={user_email} onChange={(e)=>SetUserEmail(e.target.value)} type="text" placeholder='Correo'/>
            <input className='inpU' value={user_age} onChange={(e)=>SetUserAge(e.target.value)} type="text" placeholder='Edad'/>
            <input className='inpU' value={user_phone} onChange={(e)=>SetUserPhone(e.target.value)} type="text" placeholder='Teléfono'/>

            <select className='inpU' name="country" value={user_country} id="country-select" onChange={(e)=>SetUserCountry(e.target.value)}>
            <option value="" disabled selected>Selecciona un país</option>
            <option value="CR">Costa Rica</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="BR">Brasil</option>
            <option value="US">Estados Unidos</option>
            </select>

            <input className='inpU' value={user_address} onChange={(e)=>SetUserAddress(e.target.value)} type="text" placeholder='Dirección'/>
            
            <select className='inpU' name="category" value={user_type_profile} id="type_profile-select" onChange={(e)=>SetUserTypeProfile(e.target.value)}>
            <option value="" disabled selected>Selecciona un tipo de perfil</option>
            <option value="I">Intérprete</option>
            <option value="T">Técnico</option>
            <option value="D">Director</option>
            </select>
            
            <input className='inpU' value={user_website} onChange={(e)=>SetUserWebsite(e.target.value)} type="text" placeholder='Sitio Web'/>
            
            <select className='inpU' name="social_media" value={user_social_media} id="social_media-select" onChange={(e)=>SetUserSocialMedia(e.target.value)}>
            <option value="" disabled selected>Selecciona una red social</option>
            <option value="IG">Instagram</option>
            <option value="FB">Facebook</option>
            <option value="TT">Tik Tok</option>
            </select>

            <button onClick={Create} className='btnIniciarU'>Crear</button><br /><br />
          </div>
        </div>

      </div>

</div>
  
    );
  };
  
export default CreateProfileU