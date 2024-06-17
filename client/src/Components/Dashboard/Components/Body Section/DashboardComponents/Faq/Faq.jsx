import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
    <div className='faq-page'>
        <h2>FAQ</h2>
      <div className="card-faq">
        <h3>Comment réinitialiser mon mot de passe ?</h3>
        <p>1. Allez sur la page de connexion</p>
        <p>2. Cliquez sur "Mot de passe oublié"</p>
        <p>3. Entrez votre adresse e-mail et suivez les instructions envoyées par e-mail</p>
      </div>

      <div className="card-faq">
        <h3>Comment ajouter un nouvel utilisateur ?</h3>
        <p>1. Allez dans le menu "Utilisateur"</p>
        <p>2. Cliquez sur "Ajouter un Utilisateur"</p>
        <p>3. Remplissez les informations requises et assignez les rôles appropriés</p>
      </div>

      <div className="card-faq">
        <h3>Comment exporter les données de production ?</h3>
        <p>1. Allez dans le menu "Rapports et analyse"</p>
        <p>2. Cliquez sur "Exporter les données"</p>
        <p>3. Choisissez le format souhaité (Excel, CSV) et télécharger le fichier</p>
      </div>


    </div>
  )
}

export default Faq

