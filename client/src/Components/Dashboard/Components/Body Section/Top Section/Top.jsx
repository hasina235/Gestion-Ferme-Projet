import React, {useNavigate} from 'react'
import './top.css';

import oeufs from '../../../Assets/oeufF.png';
import user from '../../../Assets/users.jpg';
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs'

import video from '../../../Assets/videoboeuf.mp4';

const Top = () => {

  const navigate = useNavigate;

  const onClickExplore = () =>{
    navigate('/animals');
  }
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvennu sur Ferme.</h1>
          <p>Bonjour Hasina, bienvennu!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Rechercher'/>
          <BiSearchAlt className='icon' />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={user} alt="Admin image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Créer et vendre des Produits</h1>
          <p>Découvrez l'excellence avec notre produit extraordinaire,
            où innovation et qualité se rencontrent pour surpasser toutes 
            vos attentes.
          </p>

          <div className="buttons flex">
            <button className='btn' onClick={ onClickExplore }>Explorer plus</button>
            <button className='btn transparent'>Meilleur produit</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>

        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Statistique</h1>

              <div className="flex">
                <span>
                  Aujourd'hui<br /><small>4</small>
                </span>
                <span>
                  ce mois dernier<br /><small>12</small>
                </span>
              </div>

              <span className="flex link">
                voir classement<BsArrowRightShort className="icon"/>
              </span>

            </div>

            <div className="imageDiv">
              <img src={oeufs} alt="image name" />
            </div>

            {/* <div className="sideBarCard">
              <BsQuestionCircle className="icon" />
              <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>

              <h3>Centre d'aide</h3>
              <p>Besoin d'aide sur Ferme., s'il vous plaît contactez-nous!</p>
              <button className='btn'>Allez dans le centre d'aide</button>
            </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top
