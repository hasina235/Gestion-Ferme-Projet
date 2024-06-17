import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.css';

import logo from '../../Assets/logo2.png';

import { IoMdSpeedometer } from 'react-icons/io';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BsTrophy, BsQuestionCircle } from 'react-icons/bs';
import { GiPig } from 'react-icons/gi';
import { FcSupport } from 'react-icons/fc';
import { FaUsers } from 'react-icons/fa6';

const Sidebar = () => {
  const [active, setActive] = useState('/');

  const handleItemClick = (path) => {
    setActive(path);
  };

  return (
    <div className='sidebar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt='image name' />
        <h2>Ferme.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">MENU</h3>
        <ul className="menuLists grid">
        {/*  */}
          <li className="listItem">
            <Link 
              to="/" 
              className={`menuLink flex ${active === '/' ? 'active' : ''}`}
              onClick={() => handleItemClick('/')}
            >
              <IoMdSpeedometer className='icon'/>
              <span className="smallText">Tableau de Bord</span>
            </Link>
          </li>

          <li className="listItem">
            <Link 
              to="/animals" 
              className={`menuLink flex ${active === '/animals' ? 'active' : ''}`}
              onClick={() => handleItemClick('/animals')}
            >
              <GiPig className='icon'/>
              <span className="smallText">Gestion des animaux</span>
            </Link>
          </li>
          <li className="listItem">
            <Link 
              to="/produits" 
              className={`menuLink flex ${active === '/produits' ? 'active' : ''}`}
              onClick={() => handleItemClick('/produits')}
            >
              <BsTrophy className='icon'/>
              <span className="smallText">Produits</span>
            </Link>
          </li>

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">PARAMETRES</h3>
        <ul className="menuLists grid">
          <li className="listItem">
            <Link 
              to="/utilisateurs" 
              className={`menuLink flex ${active === '/utilisateurs' ? 'active' : ''}`}
              onClick={() => handleItemClick('/utilisateurs')}
            >
              <FaUsers className='icon'/>
              <span className="smallText">Utilisateurs</span>
            </Link>
          </li>
          <li className="listItem">
            <Link 
              to="/rapports" 
              className={`menuLink flex ${active === '/rapports' ? 'active' : ''}`}
              onClick={() => handleItemClick('/rapports')}
            >
              <MdOutlineAnalytics className='icon'/>
              <span className="smallText">Rapport et analyse</span>
            </Link>
          </li>
          {/* <li className="listItem">
            <Link 
              to="/support" 
              className={`menuLink flex ${active === '/support' ? 'active' : ''}`}
              onClick={() => handleItemClick('/support')}
            >
              <FcSupport className='icon'/>
              <span className="smallText">Support</span>
            </Link>
          </li> */}
          <li className="listItem">
            <Link 
              to="/faq" 
              className={`menuLink flex ${active === '/faq' ? 'active' : ''}`}
              onClick={() => handleItemClick('/faq')}
            >
              <FcSupport className='icon'/>
              <span className="smallText">FAQ</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Centre d'aide</h3>
          <p>Besoin d'aide sur Ferme., s'il vous plaît contactez-nous!</p>
          <Link to={'/support'} className='btn'>Contacter</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
