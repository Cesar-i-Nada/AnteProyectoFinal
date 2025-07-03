import React from 'react'
import NavBarGeneral from '../Components/NavBarGeneral'
import ProfileO from '../Components/ProfileO'
import Footer from '../Components/Footer'
import '../Styles/MarginPages/ProfileOMP.css'

function ProfileOPage() {
  return (
    <div>
        <NavBarGeneral />
          <div className='profileOMargin'>
        <ProfileO />
        </div>
        <Footer /> 
    </div>
  )
}

export default ProfileOPage