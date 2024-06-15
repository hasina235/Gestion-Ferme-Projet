import React, { useEffect, useState } from 'react'
import '../../../../../../App.css';
import './animals.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

//des icones
import { IoMdAdd } from 'react-icons/io';
import { MdOutlineUpdate, MdDelete } from 'react-icons/md';

const Animals = () => {

  const navigate = useNavigate();

  const onClick = () =>{
    navigate('/animals/addAnimals');
  }

  const [listAnimals, setListAnimals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/animals').then((response) => {
      setListAnimals(response.data);
      console.log(response.data);
    })
  }, [])

  return (
    <div className='content'>

        <div className="header flex">
          <h1>Listes des Animaux</h1>
          <button className='btn flex' onClick={onClick}><IoMdAdd 
          className="icon" /></button>
        </div>

        <div className="table-visualisation-animals">
          <div className="head">
            <h2>Animals</h2>
          </div>

          <table className='style'>
            <thead>
              <tr>
                <th>Nom de l'animale</th>
                <th>Categorie</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            {listAnimals.map((animal)=>(
              <tbody>
                <tr>
                  <td key={animal.nom}>{animal.nom}</td>
                  <td key={animal.categorie}>{animal.categorie}</td>
                  <td><Link to={'#'}><MdOutlineUpdate className="icon update"/></Link></td>
                  <td><Link to={'#'}><MdDelete className="icon delete"/></Link></td>
                </tr>
              </tbody>
            ))}                      
          </table>
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

        

    </div>
  )
}

export default Animals
