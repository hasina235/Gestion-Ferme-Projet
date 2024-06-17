import React from 'react'
import './contact.css'

const Supports = () => {
  return (
    <div className='contact-page'>
      <h2>Contactez-Nous</h2>

      <div className="support">
        <h3>Support Technique</h3>
        <p>. E-mail: <a href="#">support@fermeapp.com</a></p>
        <p>. Téléphone: +20 22 956 87</p>
        <p>. Heures de Support: Lundi-Vendredi, 9h00 - 18h00 (heure locale)</p>
      </div>

      <div className="support">
        <h3>Support Communautaire</h3>
        <p>. E-mail: Rejoignez notre communauté d'utilisateurs sur <a href="#">notre forum</a> pour partager des conseils et des astuces</p>
        <p>. Réseaux Sociaux: Suivez-nous sur <a href="#">Facebook</a>, <a href="#">Twitter,</a> et 
        <a href="#">LinkedIn</a> pour des mise à jour et des annonces</p>
      </div>

    </div>
  )
}

export default Supports
