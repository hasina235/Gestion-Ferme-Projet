import React from 'react'
import './listing.css';

// les images à importer
import canard1 from '../../../Assets/canardF.png';
import oeufs from '../../../Assets/oeufs.png';
import lait from '../../../Assets/lait.png';
import viande from '../../../Assets/viandeF.png'

import ChartGraphique from '../DashboardComponents/Chart/ChartGraphique';


import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const Listing = () => {
  return (
    <div className='listingSection'>

      <div className="heading flex">
        <h1>Ma Listes</h1>
        <button className='btn flex'>
          Voir Plus <BsArrowRightShort className='icon' />
        </button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <AiFillHeart className='icon' />
          <img src={viande} alt="image name" />
          <h3>Viande</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={lait} alt="image name" />
          <h3>Lait</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={canard1} alt="image name" />
          <h3>Canard Musclé</h3>
        </div>

        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={oeufs} alt="image name" />
          <h3>Oeufs </h3>
        </div>
      </div>

      <div className="chartGraphique">
        <ChartGraphique />
      </div>

    </div>
  )
}

export default Listing
