import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi';

import '../styles/landing.css'

import logoImg from '../images/logo.svg'
import landing from '../images/landing.svg'
import mapMarker from '../images/map-marker.svg'


function Landing(){

   return(
      <div id="page-landing">



    <div className="content-wrapper">
    <img src={logoImg} alt="Happy"/>

    <main>
      <h1>Leve felicidade para o mundo</h1>
      <p>Visite orfanatos e mude o dia de muitas crianças</p>

      <div className="location">
        <strong>Rio de Janeiro</strong>
        <span>Porciúncula</span>
      </div>

    <Link to="/app" className="enter-app">
      <FiArrowRight size={26} color="rgba(0,0,0,0.26)"/>
    </Link>

    </main>

    </div>




    </div>
   )

}

export default Landing;