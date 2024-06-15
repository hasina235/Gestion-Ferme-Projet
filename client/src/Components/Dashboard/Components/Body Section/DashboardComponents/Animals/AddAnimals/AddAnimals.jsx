import React, { useState } from 'react'
import './AddAnimals.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const addAnimals = () => {

    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("");

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/animals', {
        nom: nom,
        categorie: categorie
        }).then((response) => {
            console.log(response.data);
            alert('animals ajouté avec succées');
            navigate('/animals');
            
        })
    }

  return (
    <div className='form-card'>
        <h2>Formulaire d'ajout d'un animal</h2>
        <form onSubmit={(e) => onSubmit(e)}> 
            <label For="nom">Nom de l'animal</label>
            <input type="text" onChange={(e) => setNom(e.target.value)}/>

            <label For="categorie">Categorie de l'animal</label>
            <select onChange={(e) => setCategorie(e.target.value)}>
                <option value=""></option>
                <option value="Bovin" onSelect={(e) => setCategorie(e.target.value)}>Bovin</option>
                <option value="Porcin" onSelect={(e) => setCategorie(e.target.value)}>Porcin</option>
                <option value="Volail" onSelect={(e) => setCategorie(e.target.value)}>Volail</option>
            </select>

            <button className='btn' type='submit'>Ajouter animal</button>
            
        </form>
    </div>
  )
}

export default addAnimals
