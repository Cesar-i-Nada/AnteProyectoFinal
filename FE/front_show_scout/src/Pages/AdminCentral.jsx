import React, { useState } from 'react'
import SidebarAdmin from '../Components/SidebarAdmin'
import Boceto2U from '../Components/Boceto2U'
import CompaniesManagement from '../Components/CompaniesManagement'
import OrganizationsManagement from '../Components/OrganizationsManagement'

function AdminCentral() {
  const [datosUsuarios,setDatosUsuarios] = useState(true)
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
        <SidebarAdmin mostrarUsuarios={mostrarTablaDUsuarios} showCompanies={showCompaniesTable} showOrganizations={showOrganizationsTable}/>
        {datosUsuarios &&
          <Boceto2U />
        }

        {companiesData &&
          <CompaniesManagement />
        }

        {organizationsData &&
          <OrganizationsManagement />
        }
    </div>
  )
}

export default AdminCentral