import React from 'react'
import '../Body Section/body.css';

// importation des necessité

import Animals from './DashboardComponents/Animals/Animals';
import Produits from './DashboardComponents/Produits/Produits';
import Utilisateurs from './DashboardComponents/Utilisateurs/Utilisateurs'
import Rapports from './DashboardComponents/Rapports/Rapports';
import Supports from './DashboardComponents/Supports/Supports'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//importation des components
import BodyGuard from './BodyGuard';
import AddProduits from './DashboardComponents/Produits/addProduct/AddProduits';
import EditProduct from './DashboardComponents/Produits/editProduct/EditProduct';


const Body = () => {
  return (
    <div className='mainContent'>
      <Router>
        <Routes>
            <Route path="/" element={<BodyGuard />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/rapports" element={<Rapports />} />
            <Route path="/support" element={<Supports />} />
            <Route path='/produits/addProduit' element={<AddProduits />} />
            <Route path='/produits/editProduits/:id' element={<EditProduct />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default Body
