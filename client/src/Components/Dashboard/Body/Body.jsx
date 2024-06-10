import React from 'react'
import '../../../App.css';

import { MdSearch } from "react-icons/md";
import Dashboards from './Dashboard/Dashboards';
import Products from './Products/Products';
import Explore from './Explore/Explore';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const Body = () => {
  const router = createBrowserRouter([
    {
      path: "/dashboard/products",
      element: <div><Products /></div>
    },
    {
      path: "/dashboard/explores",
      element: <div><Explore /></div>
    }
  ])
  return (
    <div className="body">
            <div className="navbar flex">
              <div className="welcome">
                <span className='bienvennu'>Welcome to Ferme.</span>
                <span className='bonjour'>Hello Hasina, welcome!</span>
              </div>
              <div className="search flex">
                <input type="search" name="search" id="search" placeholder='search'/>
                <MdSearch className='icon'/>
              </div>
              <div className="user-container flex">
                <div className="notification-icon">

                </div>
                <div className="image-user">

                </div>
              </div>
            </div>

            <div className="container-change">
                <Dashboards></Dashboards>
            </div>
            

            </div>
  )
}

export default Body
