import React, { useState, useEffect } from 'react'
import '../Styles/Admin.css'
import {} from 'react-router-dom'
import fetchUsers from '../Services/fetchUsers'

function Admin() {

  const [nombreUsuario, SetNombreUsuario] = useState()
  const [emailUsuario, SetEmailUsuario] = useState()
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
    SetNombreUsuario(evento.target.value)
   }
   
   function email(evento) {
     SetEmailUsuario(evento.target.value)
   }
   


function eliminar(id) {

fetchUsers.deleteUsers(id)
}

async function editar(id) {

   const objetoEditar= {
    usuario:nombreUsuario,
   email:emailUsuario
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
                <strong>Nombre:</strong>{usuario.usuario}
                <br />
                <strong>Password:</strong>{usuario.password}
                <br />
                <strong>Email:</strong>{usuario.email} 
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