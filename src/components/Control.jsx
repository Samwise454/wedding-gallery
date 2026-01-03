import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import Nav from './Nav';
import axios from 'axios';

const Control = () => {
    const api = 'https://wedding.esbatech.org/loginControl.php';
    const [user, setUser] = useState(localStorage.getItem("wedUser"));//this state will contain user logged in status
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState('false');
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
   
    const handleInput = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        setUserData({...userData, [id]: val});
    }

    const submitForm = (e) => {
        e.preventDefault();
        setLoginState('true');

        const handleResponse = (msg) => {
            setLoginState(msg);
            setTimeout(() => {
                setLoginState("false");
            }, 3000);
        }

        //run axios query and log user in
        const loginAdmin = async () => {
            try {
                const response = await axios.post(api, JSON.stringify(userData));
                if (response.status === 200) {
                    if (response.data.code === "sw123") {
                        handleResponse("sw123");
                    }
                    else if (response.data.code === "sw321") {
                        localStorage.setItem("wedControl", response.data.msg);
                        navigate("/Controldash");
                    }
                }
                else {
                    handleResponse("error");
                }
            } catch (err) {
                handleResponse("error");
            } 
        }
        loginAdmin();
    }

  return (
    <div>
      <Nav/>

        <form action="#" onSubmit={submitForm} id='loginForm' className='flex items-center justify-center w-full min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">Login</legend>

                <label htmlFor='username' className="label">Username</label>
                <input onChange={handleInput} type="text" id='username' className="input validator" placeholder="Username" required />
                <p className="validator-hint hidden">Required</p>

                <label htmlFor='password' className="label mt-5">Password</label>
                <input onChange={handleInput} type="password" id='password' className="input validator" placeholder="Password" required />
                <p className="validator-hint hidden">Required</p>

                {loginState == 'false' ?
                    <button className="btn btn-secondary mt-4" type="submit">Login</button>
                :
                    loginState == 'true' ?
                        <button className="btn btn-secondary mt-4">
                            <span className="loading loading-spinner"></span>
                            Logging in
                        </button>
                    :
                        loginState == 'error' ?
                            <button className="btn btn-secondary mt-4" type="submit">Bad Login!</button>
                        :
                            <button className="btn btn-secondary mt-4" type="submit">Login</button>
                }
            </fieldset>
        </form>
    </div>
  )
}

export default Control
