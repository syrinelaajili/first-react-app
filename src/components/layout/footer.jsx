import React from 'react';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedin } from 'react-icons/fa';
import '../../styles/footer.css';


export default function Footer() {
  return (
    <div className='footer-container'>
        <h2>a propos</h2>
        <p>L'hebdomadaire "Réalités", fleuron du groupe Maghreb Media, a été fondé en janvier 1979. Très vite il s'affirma
            <br/>
             comme un journal engagé en faveur des livertés. Lindépendance qui caractérise sa ligne éditoriale lui a valu un lourd
             <br/>
              tribut : 4 suspensions de 6 mois chacune</p>
        <h2>suivez-nous</h2>
        <div className='footer-icons'><p className='icons'><FaFacebookF/></p><p className='icons'><FaTwitter/></p><p className='icons'><FaInstagram/></p><p className='icons'><FaLinkedin/></p></div>
        <hr></hr>
        
    </div>
  )
}


