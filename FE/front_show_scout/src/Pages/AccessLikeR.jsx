import React from 'react'
import NavBarIntro from '../Components/NavBarIntro'
import AccessLikeReg from '../Components/AccessLikeReg'
import '../Styles/MarginPages/AccessLikeRMP.css'

function AccessLikeR() {
  return (
    <div>
        <NavBarIntro />
        <div className='AccessLikeRMargin'>
        <AccessLikeReg />
        </div>
    </div>
  )
}

export default AccessLikeR