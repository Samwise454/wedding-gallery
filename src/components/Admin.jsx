import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Admin = () => {
    const api = 'https://wedding.esbatech.org/loginAdmin.php';
    const [userData, setUserData] = useState({
        code: "",
        password: ""
    });
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState(false);

    const handleInput = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        setUserData({...userData, [id]: val});
    }

    const submitForm = (e) => {
        e.preventDefault();
        setLoginState(true);

        //run axios query and log user in
        const loginAdmin = async () => {
            try {
                const response = await axios.post(api, JSON.stringify(userData));
                if (response.status === 200) {
                    if (response.data.code === "") {
                        //modal
                    }
                    else {
                        localStorage.setItem("wedAdmin", userData.code);
                        navigate("/Controladmin");
                    }
                }
                else {
                    //show a modal
                }
            } catch (err) {
                //show modal for error
            } finally {
                setLoginState(false);
            }
        }
        loginAdmin();
    }

  return (
    <div>
      <Nav/>

        <form action="#" onSubmit={submitForm} className='flex flex-col items-center justify-center w-full min-h-screen'>
           <section className='bg-base-200 border-base-300 rounded-box w-xs border p-4'>
                <fieldset className="fieldset">
                    <label className="label">Code</label>
                    <input onChange={handleInput} id='code' type="text" className="input validator" placeholder="Code" required />
                    <p className="validator-hint hidden">Required</p>
                    <legend className="fieldset-legend text-lg mb-4">Login Admin</legend>
                </fieldset>

                <label className="fieldset mt-3">
                    <span className="label">Password</span>
                    <input onChange={handleInput} id='password' type="password" className="input validator" placeholder="Password" required />
                    <span className="validator-hint hidden">Required</span>
                </label>

                <section className='text-right mt-2'>
                    {loginState == false ?
                        <button className="btn btn-secondary mt-4" type="submit">Login</button>
                    :
                        <button className="btn btn-secondary mt-4">
                            <span className="loading loading-spinner"></span>
                            Logging in
                        </button>
                    }
                </section>
           </section>
        </form>
    </div>
  )
}

export default Admin
