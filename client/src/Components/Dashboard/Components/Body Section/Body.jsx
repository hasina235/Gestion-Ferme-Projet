import React from 'react'
import '../Body Section/body.css';
import Sidebar from '../Sidebar Section/Sidebar';

// importation des necessité

import Animals from './DashboardComponents/Animals/Animals';
import Produits from './DashboardComponents/Produits/Produits';
import Utilisateurs from './DashboardComponents/Utilisateurs/Utilisateurs'
import Rapports from './DashboardComponents/Rapports/Rapports';
import Supports from './DashboardComponents/Supports/Supports'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//importation des components
import BodyGuard from './BodyGuard';
import AddProduits from './DashboardComponents/Produits/AddProduits';


const Body = () => {

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <div><BodyGuard /></div>
  //   },
  //   {
  //     path: '/animals',
  //     element: <div><Animals /></div>
  //   },
  //   {
  //     path: '/produits',
  //     element: <div><Produits /></div>
  //   },
  //   {
  //     path: '/utilisateurs',
  //     element: <div><Utilisateurs></Utilisateurs></div>
  //   },
  //   {
  //     path: '/rapports',
  //     element: <div><Rapports /></div>
  //   },
  //   {
  //     path: '/support',
  //     element: <div><Supports /></div>
  //   }
  // ])
  return (
    <div className='mainContent'>
      {/* <RouterProvider router={router} /> */}
      <Router>
      <Routes>
            <Route path="/" element={<BodyGuard />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/produits" element={<Produits />} />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
            <Route path="/rapports" element={<Rapports />} />
            <Route path="/support" element={<Supports />} />
            <Route path='/produits/addProduit' element={<AddProduits />} />
      </Routes>
      </Router>
    </div>
  )
}

export default Body
