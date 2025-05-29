import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/NavBarIntro.css'
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import Logo from '../assets/img/LogoFondoBlanco.png'


function Welcome() {
    const {t, i18n} = useTranslation(["welcome"]);
    const changeLanguage = () =>{
        i18n.changeLanguage("en", "es");
    }
    return (
        <div>

          <nav className='navbarIntro'>
            <ul>
              <li className='linea'>
                <img className='Logo' src="src/assets/img/LogoFondoBlanco.png"/>   
              </li>
              <div className='transSelectIntro'>
                <li className='linea'>
                  {t("title", { name: "de César i Nada"})}
                    <button className='transBtnIntro' onClick={changeLanguage}>English</button>
                    <button className='transBtnIntro' onClick={changeLanguage}>Español</button>
                </li>  
              </div>
            </ul>
          </nav>
          
        </div>
    );
}

function NavBarIntro() {
  return (
    <Suspense fallback = "Cargando traducciones">
    <Welcome />
    </Suspense>
  );
  
}

export default NavBarIntro;