import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/NavBarGeneral.css'
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Welcome() {
    const {t, i18n} = useTranslation(["welcome"]);
    const changeLanguage = () =>{
        i18n.changeLanguage("en", "es");
    }
    return (
        <div>

          <div className="navbarGeneral">
          <Link to={"/AllCourses"}>Cursos</Link>
          <div className="dropdown">
                <button className="dropbtn">Plantillas 
                  <i className="fa fa-caret-down"></i>
                </button>
                  <div className="dropdown-content">
                    <Link to={"/LightPlanMap"}>Plano de luces</Link>
                    <Link to={"/MoneyControl"}>Presupuesto</Link>
                    <Link to={"/MoneyControl"}>Calendario</Link>

                  </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Perfiles 
                  <i className="fa fa-caret-down"></i>
                </button>
                  <div className="dropdown-content">
                    <Link to={"/ProfileACreated"}>Artista</Link>
                    <Link to={"/ProfileCCreated"}>Compañía</Link>
                    <Link to={"/ProfileOCreated"}>Organización</Link>
                  </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">Bolsa de empleo 
                  <i className="fa fa-caret-down"></i>
                </button>
                  <div className="dropdown-content">
                  <Link to={"/NetworkSpace"}>Red de contactos</Link>
                  <Link to={"/PizarraSpace"}>Pizarra</Link>
                  </div>
              </div> 
                    <div className='transSelectGeneral'>
                      {t("title", { name: "de César i Nada"})}
                      <button className='transBtnGeneral' onClick={changeLanguage}>English</button>
                      <button className='transBtnGeneral' onClick={changeLanguage}>Español</button>
                    </div>
          </div>
        </div>
    );
}

function NavBarGeneral() {
  return (
    <Suspense fallback = "Cargando traducciones">
    <Welcome />
    </Suspense>
  );
  
}

export default NavBarGeneral;