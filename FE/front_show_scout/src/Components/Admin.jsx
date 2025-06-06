import React, { useState, useEffect } from 'react'
import '../Styles/Admin.css'
import fetchUsers from '../Services/fetchUsers'
import fetchCompanies from '../Services/fetchCompanies'
import fetchOrganizations from '../Services/fetchOrganizations'

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
    usuario:username,
    nombre:user_first_name,
    apellido:user_last_name,
    correo:user_email,
    edad:user_age,
    telefono:user_phone,
    país:user_country,
    dirección:user_address,
    categoría:user_type_profile,
    sitioWeb:user_website,
    redes:user_social_media,
   }
   
  await fetchUsers.updateUsers(objetoEditar,id)
}

  return (
    
    <div>
        <div>
          <ul className='buscador'>
            <p className='tituloAdmin'>REGISTROS Y DATOS DE USUARIOS</p><br />
            
            {users.map((users,index) =>(
              <li key = {index}>
                <strong>Username:</strong>{users.username}
                <br />
                <br />
                <strong>Nombre:</strong>{users.user_first_name} 
                <br />
                <br />
                <strong>Apellido:</strong>{users.user_last_name} 
                <br />
                <br />
                <strong>Correo:</strong>{users.user_email} 
                <br />
                <br />
                <strong>Edad:</strong>{users.user_age} 
                <br />
                <br />
                <strong>Teléfono:</strong>{users.user_phone} 
                <br />
                <br />
                <strong>País:</strong>{users.user_country} 
                <br />
                <br />
                <strong>Dirección:</strong>{users.user_address} 
                <br />
                <br />
                <strong>Categoría:</strong>{users.user_type_profile} 
                <br />
                <br />
                <strong>Sitio Web:</strong>{users.user_website} 
                <br />
                <br />
                <strong>Redes Sociales:</strong>{users.user_social_media} 
                <br />
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
                <input  onChange={((e)=>SetUserFirstName(e.target.value))} type="text" placeholder='nombre'/>
                <input  onChange={((e)=>SetUserLastName(e.target.value))} type="text" placeholder='apellido'/>
                <input  onChange={((e)=>SetUserEmail(e.target.value))} type="text" placeholder='correo'/>
                <input  onChange={((e)=>SetUserAge(e.target.value))} type="text" placeholder='edad'/>
                <input  onChange={((e)=>SetUserPhone(e.target.value))} type="text" placeholder='telefono'/>
                <input  onChange={((e)=>SetUserCountry(e.target.value))} type="text" placeholder='país'/>
                <input  onChange={((e)=>SetUserAddress(e.target.value))} type="text" placeholder='dirección'/>
                <input  onChange={((e)=>SetUserTypeProfile(e.target.value))} type="text" placeholder='dirección'/>
                <input  onChange={((e)=>SetUserWebsite(e.target.value))} type="text" placeholder='sitioWeb'/>
                <input  onChange={((e)=>SetUserSocialMedia(e.target.value))} type="text" placeholder='redesSociales'/>
                <button className='filtrador' onClick={editar(localStorage.getItem("idUsuario"))}>Confirmar edición</button>
                </>
              )
              }
        </div>
    </div>


    
    


  )







     

}

export default Admin