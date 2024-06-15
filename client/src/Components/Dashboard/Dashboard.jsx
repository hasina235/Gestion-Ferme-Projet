import React from 'react'
import Sidebar from '../Dashboard/Components/Sidebar Section/Sidebar';
import '../Dashboard/Components/Body Section/body.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//les routes 
import BodyGuard from './Components/Body Section/BodyGuard';
import Animals from './Components/Body Section/DashboardComponents/Animals/Animals';
import Produits from './Components/Body Section/DashboardComponents/Produits/Produits';
import Utilisateurs from './Components/Body Section/DashboardComponents/Utilisateurs/Utilisateurs';
import Rapports from './Components/Body Section/DashboardComponents/Rapports/Rapports';
import Supports from './Components/Body Section/DashboardComponents/Supports/Supports';
import AddProduits from './Components/Body Section/DashboardComponents/Produits/addProduct/AddProduits';
import EditProduct from './Components/Body Section/DashboardComponents/Produits/editProduct/EditProduct';
import AddAnimals from './Components/Body Section/DashboardComponents/Animals/AddAnimals/AddAnimals';


const Dashboard = () => {
  return (
    <Router>
    <div className="container">
        <Sidebar />
        <div className="mainContent">
          <Routes>
            <Route path="/" element={<BodyGuard />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/rapports" element={<Rapports />} />
            <Route path="/support" element={<Supports />} />
            <Route path='/produits/addProduit' element={<AddProduits />} />
            <Route path='/produits/editProduits/:id' element={<EditProduct />}/>
            <Route path='/animals/addAnimals' element={<AddAnimals />}/>
          </Routes>
        </div>
    </div>
    </Router>
  )
}

export default Dashboard
