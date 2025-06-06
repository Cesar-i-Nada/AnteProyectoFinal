import React, { useState, useEffect } from 'react'
import '../Styles/Admin.css'
  import fetchUsers from '../Services/fetchUsers'
import fetchCompanies from '../Services/fetchCompanies'
import fetchOrganizations from '../Services/fetchOrganizations'

function Admin() {

  const [username, SetUsername] = useState()
  const [emailUser, SetEmailUser] = useState()
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

  function nombre(evento) {
    SetUsername(evento.target.value)
   }
   
   function email(evento) {
     SetEmailUser(evento.target.value)
   }
   

function eliminar(id) {
  fetchUsers.deleteUsers(id)
  setRecarga(!recarga)

}

async function editar(id) {
   const objetoEditar= {
    usuario:username,
    email:emailUser
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
                <strong>Nombre:</strong>{users.username}
                <br />
                <br />
                <strong>Email:</strong>{users.user_email} 
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
                <input  onChange={nombre} type="text" placeholder='nombre'/>
                <input  onChange={email} type="text" placeholder='correo'/>
                <button className='filtrador' onClick={editar(localStorage.getItem("idUsuario"))}>Confirmar edición</button>
                </>
              )
              }
        </div>
    </div>


    
    


  )







     

}

export default Admin