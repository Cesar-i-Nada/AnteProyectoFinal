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

useEffect (() => {

    async function fetchDataUsers() {

      const datos = await fetchUsers.getUsers()
      SetUsers(datos)
    };

    fetchDataUsers();
  }, []);

  function nombre(evento) {
    SetUsername(evento.target.value)
   }
   
   function email(evento) {
     SetEmailUser(evento.target.value)
   }
   

function eliminar(id) {

fetchUsers.deleteUsers(id)
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
            
            <div class="w3-sidebar w3-bar-block" style="display:none;z-index:5" id="mySidebar">
              <button class="w3-bar-item w3-button w3-xxlarge" onClick="w3_close()">Close &times;</button>
              <a href="#" class="w3-bar-item w3-button">Gestión de usuarios</a>
              <a href="#" class="w3-bar-item w3-button">Gestión de Compañías</a>
              <a href="#" class="w3-bar-item w3-button">Gestión de Organizaciones</a>
              <a href="#" class="w3-bar-item w3-button">Gestión de Piezas</a>
              <a href="#" class="w3-bar-item w3-button">Gestión de presupuesto</a>
              <a href="#" class="w3-bar-item w3-button">Sistema de compra</a>
              <a href="#" class="w3-bar-item w3-button">Salir</a>
            </div>
            {users.map((users,index) =>(
              <li key = {index}>
                <strong>Nombre:</strong>{users.username}
                <br />
                <strong>Password:</strong>{users.passwordUser}
                <br />
                <strong>Email:</strong>{users.emailUser} 
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