import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const EditProduct = () => {

    const { id } = useParams();

    const [produits, setProduits ] = useState([]);

    const navigate = useNavigate();

    const [nomProduits, setNomProduits] = useState("");
    const [typeProduit, setTypeProduits] = useState("");
    const [description, setDescription] = useState("");
    const [dateProduction, setDateProduction] = useState('2024-06-13');

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.put(`http://localhost:3001/produits/update/${id}`, {
            nomProduits: nomProduits,
            typeProduit: typeProduit,
            description: description,
            dateProduction: dateProduction
    })
    .then((response) => {
        console.log(response.data);
        alert("produits modifiées avec succés");
        navigate('/produits');
    })
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/produits/byId/${id}`).then((response)=>{
            setProduits(response.data);
            console.log(response.data);
        })
    }, [id]);
  return (
    <div className='card-form'>
      <h2>Formulaire de modification de Produits</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label For="nomProduit">Nom du Produit</label>
                    <input type="text" defaultValue={produits.nomProduit} 
                    onChange={(e) => setNomProduits(e.target.value)}/>

                    <label For="typeProduit">Type de Produit</label>
                    <select onChange={(e) => setTypeProduits(e.target.value)}>
                      <option value=""></option>
                      <option value="Lait" onSelect={(e) => setTypeProduits(e.target.value)}>Lait</option>
                      <option value="Viande" onSelect={(e) => setTypeProduits(e.target.value)} >Viande</option>
                      <option value="Oeufs" onSelect={(e) => setTypeProduits(e.target.value)} >Oeufs</option>
                      <option value="Chair" onSelect={(e) => setTypeProduits(e.target.value)} >Chair</option>
                    </select>

                    <label For="description">Description</label>
                    <input type="text" defaultValue={produits.description} 
                    onChange={(e) => setDescription(e.target.value)}/>

                    <label For="dateProduction">Date de production</label>
                    <input type="date" defaultValue={produits.dateProduction}
                    onChange={(e) => setDateProduction(e.target.value)}/>

                    <div className="button-action">
                      <button className='btn ajouter' type='submit'>Modifier</button>
                      {/* <button className='annuler'>Annuler</button> */}
                    </div>
                    
                </form>
    </div>
  )
}

export default EditProduct
