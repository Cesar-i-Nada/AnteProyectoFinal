import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../Styles/CompaniesManagement.css'
import fetchCompanies from '../Services/fetchCompanies'

function CompaniesManagement() {

  const [companies, SetCompanies] = useState([])

  useEffect(() => {
    async function fetchCompanies() {
      const datos = await fetchCompanies.getCompanies()
      SetCompanies(datos)
    }
    fetchCompanies()
  }, []);
      
return (
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>Company_name</th>
        <th>Company_funding</th>
        <th>Company_phone</th>
        <th>Company_email</th>
        <th>Company_password</th>
        <th>Company_country</th>
        <th>Company_address</th>
        <th>Company_type_profile</th>
        <th>Company_website</th>
        <th>Company_social_media</th>
        <th>Actions</th>
      </tr>
    </table>
</div>
);
};



export default CompaniesManagement