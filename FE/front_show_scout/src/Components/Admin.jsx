import React, { useState, useEffect } from 'react'
import '../Styles/Admin.css'
import {} from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'

function Admin() {

  const [username, SetUsername] = useState()
  const [emailUser, SetEmailUser] = useState()
  const [usuarios, SetUsuarios] = useState([])
  const [mostrar,setMostrar]=useState(false)

useEffect (() => {

    async function fetchDataUsers() {

      const datos = await fetchUsers.getUsers()
      SetUsuarios(datos)
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
            {usuarios.map((usuario,index) =>(
              <li key = {index}>
                <strong>Nombre:</strong>{usuario.username}
                <br />
                <strong>Password:</strong>{usuario.passwordUser}
                <br />
                <strong>Email:</strong>{usuario.emailUser} 
                <br />
                <div>
                <button className='filtrador' onClick={()=>{
                  setMostrar(!mostrar)
                  localStorage.setItem("idUsuario",usuario.id)
                }}>Editar</button>
                <button className='filtrador' onClick={()=>eliminar(usuario.id)}>Eliminar</button> </div><hr />
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