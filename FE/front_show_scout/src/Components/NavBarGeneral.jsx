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
            <Link to={"/AboutUs"}>Show Scout</Link>

          <div className="dropdown">
            <button className="dropbtn">Perfiles 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to={"/ProfileACreated"}>Intérprete</Link>
              <Link to={"/ProfileCCreated"}>Compañía</Link>
              <Link to={"/ProfileOCreated"}>Organización</Link>
            </div>
          </div>

          <div className="dropdown">
            <button className="dropbtn">Plantillas 
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <Link to={"/LightPlanMap"}>Plano de luces</Link>

              <div className="dropdown-submenu">
                <button className="dropbtn">Presupuesto &#129094; 
                  <i className="fa fa-caret-right"></i>
                </button>
                <div className="dropdown-content-submenu">
                  <Link to={"/BudgetIPage"}>Ingresos</Link>
                  <Link to={"/BudgetEPage"}>Egresos</Link>
                </div>
              </div>

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