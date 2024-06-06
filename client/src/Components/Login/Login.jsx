import React, { useEffect, useState } from 'react'
import './Login.css'
import '../../App.css'
import axios from 'axios';

import video from '../../LoginAssets/videoFerme2.mp4';
import logo from '../../LoginAssets/logo2.png'
import { Link, json, useNavigate } from 'react-router-dom';

import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { BsFillShieldLockFill } from "react-icons/bs";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const [usernamelogged, setUsernamelogged] = useState('');

    const [loginStatus, setLoginStatus] = useState('');
    const [statusHolder, setstatusHolder] = useState('message');

const onSubmit = async (e) => {
    const data = {username: username, password: password};
    e.preventDefault();
    try {
        await axios.post('http://localhost:3001/auth/login', data)
        .then((response) => {
            if(response.data.message || username == '' || password == ''){
                navigate('/')
                setLoginStatus(`Credential Don't Exist!`)
                
            }else{
                localStorage.setItem('accessToken', response.data);
                setUsernamelogged(response.data.username);
                navigate(`/dashboard`);
            }
            
        });
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
    if(loginStatus !== ''){
        setstatusHolder('showMessage')
        setTimeout(() => {
            setstatusHolder('message')
        }, 4000);
    }
}, [loginStatus])
  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

                <div className="textDiv">
                    <h2 className='title'>Text to introduce ferme</h2>
                    <p>a comment for ferme!</p>
                </div>

                <div className="footerDiv flex">
                    <span className="text">Don't have an account?</span>
                    <Link to={'/register'}>
                        <button className='btn'>Sign Up</button>
                    </Link>
                </div>

                
            </div>

            <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Welcome Back!</h3>
                    </div>

                    <form onSubmit={ (e) => onSubmit(e) } className='form grid'>
                        <span className={ statusHolder}>{ loginStatus }</span>
                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon'/>
                                <input type="username" id='username' name='username' placeholder='Enter Username'
                                onChange={ (e) => setUsername(e.target.value) }/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon'/>
                                <input type="password" id='password' name='password' placeholder='Enter Password'
                                onChange={ (e) => setPassword(e.target.value) }/>
                            </div>
                        </div>

                        <button type='submit' className='btn flex'>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>
                        <span className='forgotPassword'>
                            Forgot your password? <a href="">Click Here</a>
                        </span>
                        
                    </form>
                </div>
        </div>
    </div>
  )
}

export default Login
