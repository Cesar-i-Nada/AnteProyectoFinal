import React from 'react'
import Admin from '../Components/Admin'
import NavBarIntro from '../Components/NavBarIntro'
import SidebarAdmin from '../Components/SidebarAdmin'

function AdminCentral() {
  return (
    <div>
        <NavBarIntro />
        <Admin />
        <SidebarAdmin/>
    </div>
  )
}

export default AdminCentral