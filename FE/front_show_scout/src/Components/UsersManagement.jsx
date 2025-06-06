import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/UsersManagement.css'
import fetchUsers from '../Services/fetchUsers'

function UsersManagement() {

  const [usuarios, SetUsuarios] = useState([])

  useEffect(() => {
    async function fetchUsersAdmin() {
      const datos = await fetchUsers.getUsers()
      SetUsuarios(datos)
      console.log(datos);
    }
    fetchUsersAdmin()
  }, []);

  const navigate = useNavigate();

  function eliminar(id) {
    fetchUsers.deleteUsers(id)

  }
  async function editar(id){
    const Editar = {
      usuario: username,
      email: userEmail,
      password: userPassword,
      age: userAge,
      phone: userPhone,
      country: userCountry,
      address: userAddress,
      type_profile: userTypeProfile,
      website: userWebsite,
      social_media: userSocialMedia,
    }

    await fetchUsers.updateUsers(objectEditar, id);
    SetUsuarios(usuarios.map(usuario => usuario.id === id ? { ...usuario, ...objectEditar } : usuario));
      navigate('/users-management');
    
  } 
  UsersManagement();


  }
      
return (
  <div>
    <table>
      <tr>
        <th>
          ID
        </th>
        <th>
          Username
        </th>
        <th>User_first_name</th>
        <th>User_last_name</th>
        <th>User_email</th>
        <th>User_password</th>
        <th>User_age</th>
        <th>User_phone</th>
        <th>User_country</th>
        <th>User_address</th>
        <th>User_type_profile</th>
        <th>User_website</th>
        <th>User_social_media</th>
        <th>Actions</th>
      </tr>
    </table>
</div>
);
};

export default UsersManagement
