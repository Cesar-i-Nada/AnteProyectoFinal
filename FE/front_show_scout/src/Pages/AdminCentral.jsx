import React, { useState } from 'react'
import SidebarAdmin from '../Components/SidebarAdmin'
import UsersManagement from '../Components/UsersManagement'
import CompaniesManagement from '../Components/CompaniesManagement'
import OrganizationsManagement from '../Components/OrganizationsManagement'

function AdminCentral() {
  const [datosUsuarios,setDatosUsuarios] = useState(false)
  const [companiesData,setCompaniesData] = useState(false)
  const [organizationsData, setOrganizationsData] = useState(false)


  
  function mostrarTablaDUsuarios() {
    setDatosUsuarios(true)
  }

  function showCompaniesTable() {
    setCompaniesData(true)
  }

  function showOrganizationsTable() {
    setOrganizationsData(true)
  }

  
  return (
    <div>
        <SidebarAdmin mostrarUsuarios={mostrarTablaDUsuarios}/>
        {datosUsuarios &&
          <UsersManagement />
        }

        <SidebarAdmin showCompanies={showCompaniesTable}/>
        {companiesData &&
          <CompaniesManagement />
        }

        <SidebarAdmin showOrganizations={showOrganizationsTable}/>
        {organizationsData &&
          <OrganizationsManagement />
        }
    </div>
  )
}

export default AdminCentral