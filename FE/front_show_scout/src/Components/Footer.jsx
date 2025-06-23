import React from 'react'
import '../Styles/Footer.css'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div>

      <div className="flex-containerF">
        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Sobre nosotros</b></li><br />
              <li><Link to={"/AllCourses"} className='titleFooter'>Cursos</Link></li>
              <li><Link to={"/MissionPage"} className='titleFooter'>Misión</Link></li>
              <li><Link to={"/ManualPage"} className='titleFooter'>Manual</Link></li>
              <li><Link to={"/EmploymentPage"} className='titleFooter'>Empleo</Link></li>
              <li><Link to={"/StorePage"} className='titleFooter'>Tienda</Link></li>
              <li><Link to={"/PressPage"} className='titleFooter'>Prensa</Link></li>
              <li><Link to={"/InvestmentPage"} className='titleFooter'>Inversión</Link></li>
              <li><Link to={"/ContactUsPage"} className='titleFooter'>Contáctenos</Link></li>
            </ul> 
        </div>

        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Productos</b></li><br />
              <li><Link to={"/ShowScoutApp"} className='titleFooter'>ShowScout App</Link></li>
              <li><Link to={"/AppParaOrgs"} className='titleFooter'>ShowScout para organizaciones</Link></li>
              <li><Link to={"/PodcastChannel"} className='titleFooter'>Podcast</Link></li>
            </ul>
        </div>

        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Apps</b></li><br />
              <li><Link to={"/DownloadApps"} className='titleFooter'>ShowScout para celular</Link></li>
            </ul>
        </div>

        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Ayuda y soporte</b></li><br />
              <li><Link to={"/SupportApp"} className='titleFooter'>ShowScout App</Link></li>
              <li><Link to={"/SupportAllCourses"} className='titleFooter'>Cursos</Link></li>
            </ul>
        </div>

        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Términos y privacidad</b></li><br />
              <li><Link to={"/NormasPage"} className='titleFooter'>Normas</Link></li>
              <li><Link to={"/TerminosPage"} className='titleFooter'>Términos</Link></li>
              <li><Link to={"/PrivacidadPage"} className='titleFooter'>Privacidad</Link></li>
            </ul>
        </div>

        <div>
            <ul className='listaFooter'>
              <li className='titleFooterH'><b>Social</b></li><br />
              <li><Link to={"/BlogPage"} className='titleFooter'>Blog</Link></li>
              <li><Link to={"/InstagramPage"} className='titleFooter'>Instagram</Link></li>
              <li><Link to={"/YouTubeChannelPage"} className='titleFooter'>Canal de YouTube</Link></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Footer