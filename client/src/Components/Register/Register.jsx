import React, { useState } from 'react'
import './Register.css'
import '../../App.css'

import video from '../../LoginAssets/videoboeuf.mp4';
import logo from '../../LoginAssets/logo2.png'
import { Link, useNavigate } from 'react-router-dom';

import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MdMarkEmailRead } from "react-icons/md";
import axios from 'axios';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();
        const data = {username: username, password: password};
        try {
            await axios.post('http://localhost:3001/auth', data).then((response) => {
                navigate('/');
                console.log(response);
            })
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='registerPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className='title'>Bienvennue sur Ferme.</h2>
                    <p>où nous élevons avec passions des animaux en plain aire pour vous
                        offrir des produits d'une qualité exceptionnelle.</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Dejà Inscrit?</span>
                    <Link to={'/'}>
                        <button className='btn'>Se connecter</button>
                    </Link>
                </div>

                
            </div>

            <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Plus d'informations</h3>
                    </div>

                    <form onSubmit={ (e) =>onSubmit(e) } className='form grid'>
                        {/* <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon'/>
                                <input type="email" id='email' name='email' placeholder='Enter Email'
                                onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div> */}

                        <div className="inputDiv">
                            <label htmlFor="username">Nom d'utilisateur</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="text" id='username' name='username' placeholder='Utilisateur'
                                onChange={(e) => setUsername(e.target.value)}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Mot de passe</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' name='password' placeholder='mot de passe'
                                onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </div>

                        {/* <span className='forgotPassword'>
                            Forgot your password? <a href="">Click Here</a>
                        </span> */}

                        <button type='submit' className='btn flex'>
                            <span>S'enregistrer</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>

                        
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Register
