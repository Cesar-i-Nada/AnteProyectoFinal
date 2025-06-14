import React, { useState, useEffect } from 'react'
import '../Styles/CreateProfileO.css'
import { useNavigate } from 'react-router-dom'
import fetchOrganizations from '../Services/fetchOrganizations'


function CreateProfileO() {

  const [organization_name,  SetOrganizationName] = useState("")
  const [organization_funding, SetOrganizationFunding] = useState("")
  const [organization_phone, SetOrganizationPhone] = useState("")
  const [organization_email, SetOrganizationEmail] = useState("")
  const [organization_password,  SetOrganizationPassword] = useState("")
  const [organization_country, SetOrganizationCountry] = useState("")
  const [organization_address, SetOrganizationAddress] = useState("")
  const [organization_type_profile, SetOrganizationTypeProfile] = useState("")
  const [organization_website, SetOrganizationWebsite] = useState("")
  const [organization_social_media, SetOrganizationSocialMedia] = useState("")
  const [organizations, SetOrganizations] = useState([])
  
  const navigate = useNavigate()

  useEffect (() => {

    async function fetchDataCompanies() {

      const datos = await fetchOrganizations.getOrganizations()
      SetOrganizations(datos)
    };

    fetchDataCompanies();
  }, []);

function Create() { 

  const registered = organizations.filter(organization => organization.organizationName === organization_name && organization.organizationPassword === organization_password)
    
    console.log(registered);
    
    if (registered.length === 0) {
      console.log('Organización no registrada');
      return;
    } 
    
    const organizacionEncontrada = registered [0]; 
    
      //valida si el perfil ya se realizó
    if (organizacionEncontrada.perfilCreado) {
      console.log('La organización está registrada, por lo que puede ingresar');
      localStorage.setItem("organización", JSON.stringify(organizacionEncontrada));
      navigate('/SynchroMap');
    }else{
      console.log('La organización aún no ha creado un perfil');  
      localStorage.setItem("organización",JSON.stringify(organizacionEncontrada))
      navigate('/CreateProfileC')
    }
   }

return (

<div>
    
    <div className="containerO">
        <div>
            <img className='Cabritas' src="src/assets/img/CabritasClr.gif"/>   
        </div>

        <div>  
          <div className='espCreateO'>
            <p className='textCreateO'>Cree su perfil</p><br />
            <input className='inpO' value={organization_name} onChange={(e)=>SetOrganizationName(e.target.value)} type="text" placeholder='Alias'/>
            <input className='inpO' value={organization_funding} onChange={(e)=>SetOrganizationFunding(e.target.value)} type="text" placeholder='Fecha de fundación'/>
            <input className='inpO' value={organization_phone} onChange={(e)=>SetOrganizationPhone(e.target.value)} type="text" placeholder='Teléfono'/>
            <input className='inpO' value={organization_email} onChange={(e)=>SetOrganizationEmail(e.target.value)} type="text" placeholder='Correo'/>
            <input className='inpO' value={organization_password} onChange={(e)=>SetOrganizationPassword(e.target.value)} type="text" placeholder='Contraseña'/>
            <input className='inpO' value={organization_country} onChange={(e)=>SetOrganizationCountry(e.target.value)} type="text" placeholder='País' />
            <input className='inpO' value={organization_address} onChange={(e)=>SetOrganizationAddress(e.target.value)} type="text" placeholder='Dirección'/>
            <input className='inpO' value={organization_type_profile} onChange={(e)=>SetOrganizationTypeProfile(e.target.value)} type="text" placeholder='Tipo de perfil'/>
            <input className='inpO' value={organization_website} onChange={(e)=>SetOrganizationWebsite(e.target.value)} type="text" placeholder='Sitio Web'/>
            <input className='inpO' value={organization_social_media} onChange={(e)=>SetOrganizationSocialMedia(e.target.value)} type="text" placeholder='Redes sociales'/>
            <button onClick={Create} className='btnIniciarO'>Crear</button><br /><br />
          </div>
        </div>

      </div>

</div>
  
    );
  };
  
export default CreateProfileO
