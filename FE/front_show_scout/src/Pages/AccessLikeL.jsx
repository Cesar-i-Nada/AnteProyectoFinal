import React from 'react'
import NavBarIntro from '../Components/NavBarIntro'
import AccessLikeLog from '../Components/AccessLikeLog'
import '../Styles/MarginPages/AccessLikeLMP.css'


function AccessLikeL() {
  return (
    <div>
        <NavBarIntro />
          <div className='accessLikeLMargin'>
        <AccessLikeLog />
        </div>
    </div>
  )
}

export default AccessLikeL