import React, { useEffect, useState } from 'react'
import './produits.css';
import '../../../../../../App.css';
import axios from 'axios';
import { Link, json } from 'react-router-dom';

//icon
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineUpdate, MdDelete } from 'react-icons/md';

const Produits = () => {

  const [produits, setProduits] = useState([]);
  const [totalPages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  

  const fetchProduits = async (page = 1) => {
    try {
      await axios.get(`http://localhost:3001/produits/?page=${page}&limit=5`).then((response) => {
        setProduits(response.data.produits);
        setTotalPage(response.data.totalPages);
        setCurrentPage(response.data.currentPage);
      });
    } catch (error) {
        console.error('Erreur lors de la recuperation des posts', error);
    }
  }

  useEffect(() => {
    fetchProduits(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    fetchProduits(page);
  }

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
          <tbody>
            {produits.map((produit) => (
              <tr key={produit.id}>
                <td>{produit.nomProduit}</td>
                <td>{produit.typeProduit}</td>
                <td>{produit.description}</td>
                <td>{produit.dateProduction}</td>
                <td><Link to={`/produits/editProduits/${produit.id}`}><MdOutlineUpdate className="icon"/></Link></td>
                <td><Link to="#"><MdDelete className="icon"/></Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="pagination">
          {[...Array(totalPages).keys()].map(number => (
            <button
              key={number + 1}
              onClick={() => handlePageChange(number + 1)}
              disabled={currentPage === number + 1}
              className='btn'
            >
              {number + 1}
            </button>
          ))}
        </div>
      
    </div>
  )
}

export default Produits;
