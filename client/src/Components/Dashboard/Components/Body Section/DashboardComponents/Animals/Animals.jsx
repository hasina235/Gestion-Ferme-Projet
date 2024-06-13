import React, { useEffect, useState } from 'react'
import '../../../../../../App.css';
import './animals.css';

//des icones
import { IoMdAdd } from 'react-icons/io';

const Animals = () => {

  const [listBovin, setListBovin] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3001/animals').then((response) => {
  //     setListBovin(response.data);
  //   })
  // })
  return (
    <div className='content'>

        <div className="header flex">
          <h1>Listes des Animaux</h1>
          <button className='btn flex'><IoMdAdd 
          className="icon" /></button>
        </div>

        <div className="table-animals flex">

          <div className="table">
            <h2>Bovin</h2>
            <table>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Categorie</th>
                </tr>               
              </thead>
              <tbody>
                <tr>
                  <td>Vache Sobre</td>
                  <td>Bovin</td>
                </tr>               
              </tbody>
            </table>
          </div>

          <div className="table">
            <h2>Porcin</h2>
            <table>
              <thead>
                <th>Nom</th>
                <th>Categorie</th>
              </thead>
              <tbody>
                <td>Cochon dinde</td>
                <td>Porcin</td>
              </tbody>
            </table>
          </div>

          <div className="table">
            <h2>Volail</h2>
            <table>
              <thead>
                <th>Nom</th>
                <th>Categorie</th>
              </thead>
              <tbody>
                <td>Canard Muran</td>
                <td>Volail</td>
              </tbody>
            </table>
          </div>

        </div>

        <div className="table-visualisation-animals">
          <div className="head">
            <h2>Animals</h2>
          </div>

          <div className="card-visuel">
              <span>Identifiant: 7</span>
              <span>Nom de l'animale : Vertu gar</span>
              <span>Categorie : Bovin</span>
          </div>
        </div>

    </div>
  )
}

export default Animals
