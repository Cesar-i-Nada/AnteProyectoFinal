import React, { useState, useEffect } from 'react'
import '../Styles/UsersManagement.css'
import fetchUsers from '../Services/fetchUsers'

function Admin() {
  const [username, SetUsername] = useState("")
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
  const [mostrar,setMostrar]=useState(false)
  const [recarga,setRecarga] = useState(false)

useEffect (() => {
    async function fetchDataUsers() {
      const datos = await fetchUsers.getUsers()
      SetUsers(datos)
    };

    fetchDataUsers();
  }, [recarga]
)

function eliminar(id) {
  fetchUsers.deleteUsers(id)
  setRecarga(!recarga)

}

async function editar(id) {
   const objetoEditar= {
    username:username,
    user_first_name:user_first_name,
    user_last_name:user_last_name,
    user_email:user_email,
    user_age:user_age,
    user_phone:user_phone,
    user_country:user_country,
    user_address:user_address,
    user_type_profile:user_type_profile,
    user_website:user_website,
    user_social_media:user_social_media,
   }
   
  const peticion =await fetchUsers.updateUsers(objetoEditar,id)
   console.log(peticion);
   
}

  return (
    
    <div>
        <div>
          <ul className='buscador'>
            <p className='tituloAdmin'>REGISTROS Y DATOS DE USUARIOS</p><br />
            
            {users.map((users,index) =>(
              <li key = {index}>
                <div>
                  <table>
  <tr>
    <th>Alias</th>{users.username}
    <th>Nombre</th>{users.user_first_name}
    <th>Apellido</th>{users.user_last_name}
    <th>Correo</th>{users.user_email}
    <th>Edad</th>{users.user_age}
    <th>Teléfono</th>{users.user_phone}
    <th>País</th>{users.user_country}
    <th>Dirección</th>{users.user_address}
    <th>Categoría</th>{users.user_type_profile}
    <th>Sitio Web</th>{users.user_website}
    <th>Redes Sociales</th>{users.user_social_media}
  </tr>
  </table>
                </div>
                <strong>Username:</strong>{users.username}
                <br />
                <strong>Nombre:</strong>{users.user_first_name} 
                <br />
                <strong>Apellido:</strong>{users.user_last_name} 
                <br />
                <strong>Correo:</strong>{users.user_email} 
                <br />
                <strong>Edad:</strong>{users.user_age} 
                <br />
                <strong>Teléfono:</strong>{users.user_phone} 
                <br />
                <strong>País:</strong>{users.user_country} 
                <br />
                <strong>Dirección:</strong>{users.user_address}
                <br />
                <strong>Categoría:</strong>{users.user_type_profile} 
                <br />
                <strong>Sitio Web:</strong>{users.user_website} 
                <br />
                <strong>Redes Sociales:</strong>{users.user_social_media} 
                <div>
                <button className='filtrador' onClick={()=>{
                  setMostrar(!mostrar)
                  localStorage.setItem("idUsuario",users.id)
                }}>Editar</button>
                <button className='filtrador' onClick={()=>eliminar(users.id)}>Eliminar</button> </div><hr />
              </li>
            ))}
          </ul>
          {mostrar && (
            <>
                <input  onChange={(e)=>SetUsername(e.target.value)} type="text" placeholder='alias'/>
                <input  onChange={(e)=>SetUserFirstName(e.target.value)} type="text" placeholder='nombre'/>
                <input  onChange={(e)=>SetUserLastName(e.target.value)} type="text" placeholder='apellido'/>
                <input  onChange={(e)=>SetUserEmail(e.target.value)} type="text" placeholder='correo'/>
                <input  onChange={(e)=>SetUserAge(e.target.value)} type="text" placeholder='edad'/>
                <input  onChange={(e)=>SetUserPhone(e.target.value)} type="text" placeholder='telefono'/>
                <input  onChange={(e)=>SetUserCountry(e.target.value)} type="text" placeholder='país'/>
                <input  onChange={(e)=>SetUserAddress(e.target.value)} type="text" placeholder='dirección'/>
                <input  onChange={(e)=>SetUserTypeProfile(e.target.value)} type="text" placeholder='tipo perfil'/>
                <input  onChange={(e)=>SetUserWebsite(e.target.value)} type="text" placeholder='sitioWeb'/>
                <input  onChange={(e)=>SetUserSocialMedia(e.target.value)} type="text" placeholder='redesSociales'/>
                <button className='filtrador' onClick={()=>editar(localStorage.getItem("idUsuario"))}>Confirmar edición</button>
                </>
              )
              }
        </div>
    </div>

  )
  
}

export default Admin