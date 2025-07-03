import React from 'react'
import NavBarGeneral from '../Components/NavBarGeneral'
import ProfileC from '../Components/ProfileC'
import Footer from '../Components/Footer'
import '../Styles/MarginPages/ProfileCMP.css'

function ProfileCPage() {
  return (
    <div>
        <NavBarGeneral />
          <div className='profileCMargin'>
        <ProfileC />
        </div>
        <Footer /> 
    </div>
  )
}

export default ProfileCPage