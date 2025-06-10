import React, { useState, useEffect } from 'react'
import '../Styles/UsersManagement.css'
import fetchUsers from '../Services/fetchUsers'

function AdminUsers() {
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
          <p className='tituloUsers'>REGISTROS Y DATOS DE USUARIOS</p><br />
            
            {users.map((users,index) =>(
              <li key = {index}>
                <tableContainer>
                  <table className='usersTable'>
                    <TableHead>
                      <TableRow>
                        <TableCell>Alias{users.username}</TableCell>
                        <TableCell>Nombre{users.user_first_name}</TableCell>
                        <TableCell>Apellido{users.user_last_name}</TableCell>
                        <TableCell>Correo{users.user_email}</TableCell>
                        <TableCell>Edad{users.user_age}</TableCell>
                        <TableCell>Teléfono{users.user_phone}</TableCell>
                        <TableCell>País{users.user_country}</TableCell>
                        <TableCell>Dirección{users.user_address}</TableCell>
                        <TableCell>Categoría{users.user_type_profile}</TableCell>
                        <TableCell>Sitio Web{users.user_website}</TableCell>
                        <TableCell>Redes Sociales{users.user_social_media}</TableCell>
                      </TableRow>
                   </TableHead>
                   
                   <TableBody>
                    {users.map(celda=>(
                      <TableRoW>
                        <TableCell>{celda.alias}</TableCell>
                        <TableCell>{celda.nombre}</TableCell>
                        <TableCell>{celda.apellido}</TableCell>
                        <TableCell>{celda.correo}</TableCell>
                        <TableCell>{celda.edad}</TableCell>
                        <TableCell>{celda.telefono}</TableCell>
                        <TableCell>{celda.pais}</TableCell>
                        <TableCell>{celda.direccion}</TableCell>
                        <TableCell>{celda.categoria}</TableCell>
                        <TableCell>{celda.sitio}</TableCell>
                        <TableCell>{celda.redes}</TableCell>
                      </TableRoW>
                    ))}
                   </TableBody>
                  </table>
                </tableContainer>  
                       
            <div>
              <button className='filtrador' onClick={()=>{
                setMostrar(!mostrar)
                localStorage.setItem("idUsuario",users.id)
              }
                }>Editar</button>
                  <button className='filtrador' onClick={()=>eliminar(users.id)
                  
                }>Eliminar</button> </div><hr />
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

export default AdminUsers