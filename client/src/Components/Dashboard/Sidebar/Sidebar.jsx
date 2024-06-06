import React, { useState } from 'react';
import '../../../App.css';
import logo from '../Assets/logo2.png';


import { AiOutlineDashboard, AiFillProduct, AiOutlineProfile } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineAreaChart, MdOutlineContactPhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { AiOutlineSwapLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';



const Sidebar = () => {
    const navigate = useNavigate();
  const logout = () => {
    let logOut = confirm("voulez-vous vraiment quitter?");
    if(!logOut) {
      navigate('/dashboard');
    }
    else{
      navigate('/')
      localStorage.removeItem('accessToken');
    }
  }
  return (
    <div className="sidebar">
            <div className="logo flex">
              <img src={logo} />
              <nav>Ferme.</nav>
            </div>

            <div className="navItem">
              <h2>QUICK MENUS</h2>
              <ul>
                <li><a href="/dashboard" className=' flex'><AiOutlineDashboard className='icon'/> Dashboard</a></li>
                <li><a href="/dashboard/explore" className='flex'><AiFillProduct className='icon'/> Explore</a></li>
                <li><a href="/dashboard/products" className='flex'><MdOutlineExplore className='icon'/> Products</a></li>
                <li><a href="/dashboard/ressources" className='flex'><MdOutlineExplore className='icon'/> Ressources</a></li>
              </ul>
              <h2>SETTINGS</h2>
              <ul>
                <li><a href="/dashboard/charts" className='flex'><MdOutlineAreaChart className='icon'/> Charts</a></li>
                <li><a href="/dashboard/contacts" className='flex'><MdOutlineContactPhone className='icon'/> Contacts</a></li>
                <li><a href="/dashboard/profils" className='flex'><AiOutlineProfile className='icon'/> Profils</a></li>
              </ul>
            </div>

            <button className='flex btn' onClick={ logout }>
            <AiOutlineSwapLeft className='icon'/>
              Log Out
            </button>

            <div className="help-center">
              help
            </div>
          </div>
  )
}

export default Sidebar
