import React from 'react'
import FormRegister from '../Components/FormRegister'
import NavBarIntro from '../Components/NavBarIntro'
import '../Styles/MarginPages/FormRegisterMP.css'


function Register() {
  return (
    <div>
      <NavBarIntro />
      <div className='formRegisterM'>
      <FormRegister />
      </div>
    </div>
  )
}

export default Register