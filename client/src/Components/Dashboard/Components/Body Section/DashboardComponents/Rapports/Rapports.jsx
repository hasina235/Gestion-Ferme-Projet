import React, { useEffect, useState } from 'react'
import './rapport.css'
import GenererPdf from './GenererPdf/GenererPdf';
import axios from 'axios';
import RappoortJournalier from './GenererPdf/RappoortJournalier';
import GenererCsv from './GenererCSV/GenererCsv';

//utilities



// const data = [
//   { nomProduit: 'Lait', typeProduit: 'lait', description: 'lait de vache', dateProduction: '2024-06-13' },
//   { nomProduit: 'viande', typeProduit: 'viande', description: 'viande de porc', dateProduction: '2024-06-13' }
// ];



const Rapports = () => {

  const [listProduits, setListProduits] = useState([]);

  const [listProduitsParMois, setListProduitsParMois] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/produits').then((response) => {
      setListProduits(response.data);
      console.log(response.data);
    })
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/produits/groupByWeek').then((response) => {
  //     setListProduitsParMois(response.data);
  //     console.log(response.data);
  //   })
  // }, [])


  return (
    <div className='contents'>

      <div className="head flex">
        <h1>Rapport et Analyse de production</h1>
        <button className='btn'>Generer Rapport</button>
      </div>

      <div className="rapport-de-production">
        <div className="title">
          <h2>Rapport de Production</h2>
        </div>
        
        <div className="body">
          <span>Generer Rapport de Production</span>
          <div className="type">
            <RappoortJournalier className="journalier" data={listProduits}/>
            <GenererPdf data={listProduits}/>
          </div>
        </div>
      </div>

      <div className="analyse-de-produit">
        <div className="title">
          <h2>Analyse</h2>
        </div>

        <div className="body">
          <span>Analyser les Produits</span>
          <div className="type">
            <button className='btn'>Lait</button>
            <button className='btn'>Oeufs</button>
            <button className='btn'>Viande</button>
        </div>
        </div>
      </div>

      <div className="Exportation-des-donnees">
      <div className="title">
          <h2>Exportation des données</h2>
        </div>

        <div className="body">
          <span>Exporter les Données</span>
          <div className="type">
            <GenererCsv />
        </div>
        </div>

      </div>
    </div>
  )
}

export default Rapports
