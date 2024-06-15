import React, { useEffect, useState } from 'react'
import './produits.css';
import '../../../../../../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

//icon
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineUpdate, MdDelete } from 'react-icons/md';

const Produits = () => {


  const [listProduits, setListesProduit] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:3001/produits').then((response) => {
      setListesProduit(response.data);
      console.log(response.data);
    })
  }, [])

  return (
    <div className='content'>

      <div className="header flex">
        <h1>Listes des Produits</h1>
        <button className='btn flex'><a href="/produits/addProduit"><IoMdAdd 
          className="icon" /></a></button>
      </div>

      <div className="table-product">
        <table className='style'>
          <thead>
            <tr>
              <th>Nom du Produits</th>
              <th>Type</th>
              <th>description</th>
              <th>Date de Production</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          {listProduits.map((produit)=>(
              <tbody>
              <tr>
                <td key={produit.nomProduit}>{produit.nomProduit}</td>
                <td key={produit.typeProduit}>{produit.typeProduit}</td>
                <td key={produit.description}>{produit.description}</td>
                <td key={produit.dateProduction}>{produit.dateProduction}</td>
                <td><Link to={`/produits/editProduits/${produit.id}`}><MdOutlineUpdate className="icon"/></Link></td>
                <td><Link to="#"><MdDelete className="icon"/></Link></td>
              </tr>
            </tbody>
          ))}
          
        </table>
      </div>
    </div>
  )
}

export default Produits
