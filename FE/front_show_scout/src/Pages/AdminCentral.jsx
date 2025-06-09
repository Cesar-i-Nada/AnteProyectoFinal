import React from 'react'
import SidebarAdmin from '../Components/SidebarAdmin'
import UsersManagement from '../Components/UsersManagement'
import CompaniesManagement from '../Components/CompaniesManagement'
import OrganizationsManagement from '../Components/OrganizationsManagement'

function AdminCentral() {
  return (
    <div>
        <SidebarAdmin/>
        <UsersManagement />
        <CompaniesManagement />
        <OrganizationsManagement />
    </div>
  )
}

export default AdminCentral