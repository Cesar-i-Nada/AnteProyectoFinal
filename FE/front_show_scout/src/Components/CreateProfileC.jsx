import React, { useState, useEffect } from 'react'
import '../Styles/CreateProfileC.css'
import { useNavigate } from 'react-router-dom'
import fetchCompanies from '../Services/fetchCompanies'


function CreateProfileC() {

  const [company_name,  SetCompanyName] = useState("")
  const [company_funding, SetCompanyFunding] = useState("")
  const [company_phone, SetCompanyPhone] = useState("")
  const [company_email, SetCompanyEmail] = useState("")
  const [company_password,  SetCompanyPassword] = useState("")
  const [company_country, SetCompanyCountry] = useState("")
  const [company_address, SetCompanyAddress] = useState("")
  const [company_type_profile, SetCompanyTypeProfile] = useState("")
  const [company_website, SetCompanyWebsite] = useState("")
  const [company_social_media, SetCompanySocialMedia] = useState("")
  const [companies, SetCompanies] = useState([])
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataCompanies() {

      const datos = await fetchCompanies.getCompanies()
      SetCompanies(datos)
    };

    fetchDataCompanies();
  }, []);

function Create() { 

  const registered = companies.filter(company => company.companyName === company_name && company.companyPassword === company_password)
    
    console.log(registered);
    
    if (registered.length === 0) {
      console.log('Compañía no registrada');
      return;
    } 
    
    const compañíaEncontrada = registered [0]; 
    
      //valida si el  perfil ya se realizó
    if (compañíaEncontrada.perfilCreado) {
      console.log('La compañía está registrada, por lo que puede ingresar');
      localStorage.setItem("compañía", JSON.stringify(compañíaEncontrada));
      navigate('/SynchroMap');
    }else{
      console.log('La compañía aún no ha creado un perfil');  
      localStorage.setItem("compañía",JSON.stringify(compañíaEncontrada))
      navigate('/CreateProfileC')
    }
   }

return (

<div>
    
    <div className="containerC">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espCreateU'>
            <p className='textCreateU'>Cree su perfil</p><br />
            <input className='inpC' value={company_name} onChange={(e)=>SetCompanyName(e.target.value)} type="text" placeholder='Alias'/>
            <input className='inpC' value={company_funding} onChange={(e)=>SetCompanyFunding(e.target.value)} type="text" placeholder='Fecha de fundación'/>
            <input className='inpC' value={company_phone} onChange={(e)=>SetCompanyPhone(e.target.value)} type="text" placeholder='Teléfono'/>
            <input className='inpC' value={company_email} onChange={(e)=>SetCompanyEmail(e.target.value)} type="text" placeholder='Correo'/>
            <input className='inpC' value={company_password} onChange={(e)=>SetCompanyPassword(e.target.value)} type="text" placeholder='Contraseña'/>
            <input className='inpC' value={company_country} onChange={(e)=>SetCompanyCountry(e.target.value)} type="text" placeholder='País' />
            <input className='inpC' value={company_address} onChange={(e)=>SetCompanyAddress(e.target.value)} type="text" placeholder='Dirección'/>
            <input className='inpC' value={company_type_profile} onChange={(e)=>SetCompanyTypeProfile(e.target.value)} type="text" placeholder='Tipo de perfil'/>
            <input className='inpC' value={company_website} onChange={(e)=>SetCompanyWebsite(e.target.value)} type="text" placeholder='Sitio Web'/>
            <input className='inpC' value={company_social_media} onChange={(e)=>SetCompanySocialMedia(e.target.value)} type="text" placeholder='Redes sociales'/>
            <button onClick={Create} className='btnIniciarC'>Crear</button><br /><br />
          </div>
        </div>

      </div>

</div>
  
    );
  };
  
export default CreateProfileC
