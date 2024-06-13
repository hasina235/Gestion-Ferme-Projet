import axios from 'axios';
import '../../../../../../App.css';
import './addProduits.css';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function AddProduits() {
    const { id } = useParams();


    const [isOpen, setIsOpen] = useState(false);

    
    let navigate = useNavigate();

    const [nomProduit, setNomProduit] = useState("");
    const [typeProduit, setTypeProduit] = useState("");
    const [description, setDescription] = useState("");
    const [dateProduction, setDateProduction] = useState('2024/06/13');


//     const closeModal = () => {
//       setIsOpen(false);
//       navigate(`/`);
//   };

    const handleAction = async (e) => {
      e.preventDefault();
        await axios.post(`http://localhost:3001/produits`, {nomProduit, typeProduit, description, dateProduction}).then((response) =>{
            alert('produit ajouté avec succés');
            console.log(response.data);
            navigate('/produits');
        });
        
    }


  return (
    <div className='card-form'>
      <h2>Formulaire d'ajout de production</h2>
                <form onSubmit={(e) => handleAction(e)}>
                    <label For="nomProduit">Nom du Produit</label>
                    <input type="text" onChange={(e) => setNomProduit(e.target.value)}/>

                    <label For="typeProduit">Type de Produit</label>
                    <input type="text" onChange={(e) => setTypeProduit(e.target.value)}/>

                    <label For="description">Description</label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)}/>

                    <label For="dateProduction">Date de production</label>
                    <input type="date" onChange={(e) => setDateProduction(e.target.value)}/>

                    <div className="button-action">
                      <button className='btn ajouter' type='submit'>Ajouter</button>
                      {/* <button className='annuler'>Annuler</button> */}
                    </div>
                    
                </form>
    </div>

  )
}

export default AddProduits

