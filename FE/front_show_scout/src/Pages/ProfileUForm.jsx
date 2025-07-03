import React from 'react'
import CreateProfileU from '../Components/CreateProfileU'
import '../Styles/MarginPages/CreateProfileUMP.css'
import NavBarIntro from '../Components/NavBarIntro'

function ProfileUForm() {
  return (
    <div>
        <NavBarIntro />
          <div className='createProfileUMargin'>
        <CreateProfileU />
        </div>
    </div>
  )
}

export default ProfileUForm