import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../../../../App.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  const [nomProduit, setNomProduit] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/produits').then((response) => {
      setProducts(response.data);
    })
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      nomProduit: nomProduit,
      description: description,
      prix: prix
    }
    try {
      axios.post('http://localhost:3001/produits', data).then((response)  => {
        console.log(response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <div className="button-toggle-form">
        <a href="/dashboard/products/create" className='btn'>Insert Product</a>
      </div>

      <div className="item-product flex">
      <div className="table-list-products">
        <table>
          <tr>
            <th className='table-header'>Name</th>
            <th className='table-header'>Description</th>
            <th className='table-header'>Price</th>
          </tr>
            {products.map((product) =>(
              <tr>
                <td className='table-body'><div key={product.nomProduit}>{ product.nomProduit }</div></td>
                <td className='table-body'><div key={product.description}>{ product.description }</div></td>
                <td className='table-body'><div key={product.prix}>{ product.prix }</div></td>
              </tr>
            ))}
        </table>
      </div>

      <div className="form-insert-products">
        <h3>Insert new Product here</h3>
        <form onSubmit={(e)=>onSubmit(e)}>
          <label For="productName">Product Name:</label><br />
          <input type="text" name='nomProduit' onChange={(e) =>setNomProduit(e.target.value)}/><br />
          <label For="description"> Description:</label><br />
          <input type="text" name='description' onChange={(e) =>setDescription(e.target.value)}/><br />
          <label For="price">Price:</label><br />
          <input type="text" name='prix'onChange={(e) =>setPrix(e.target.value)}/><br /><br />
          <button type='submit' className=' btn'>Save</button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Products
