import React, { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import '../Styles/OrganizationsManagement.css'
import fetchOrganizations from '../Services/fetchOrganizations'

function OrganizationsManagement() {

  const [organizations, SetOrganizations] = useState([])

  useEffect(() => {
    async function fetchOrganizations() {
      const datos = await fetchOrganizations.getOrganizations()
      SetOrganizations(datos)
    }
    fetchOrganizations()
  }, []);
      
return (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Organization_name</th>
        <th>Organization_funding</th>
        <th>Organization_phone</th>
        <th>Organization_email</th>
        <th>Organization_password</th>
        <th>Organization_country</th>
        <th>Organization_address</th>
        <th>Organization_type_profile</th>
        <th>Organization_website</th>
        <th>Organization_social_media</th>
        <th>Actions</th>
      </tr>
    </table>
</div>
);
};

export default OrganizationsManagement