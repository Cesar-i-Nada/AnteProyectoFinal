import React from 'react'
import NavBarGeneral from '../Components/NavBarGeneral'
import ProfileU from '../Components/ProfileU'
import Footer from '../Components/Footer'
import '../Styles/MarginPages/ProfileUMP.css'

function ProfileUPage() {
  return (
    <div>
        <NavBarGeneral />
          <div className='profileUMargin'>
        <ProfileU />
        </div>
        <Footer /> 
    </div>
  )
}

export default ProfileUPage