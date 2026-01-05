import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import 'animate.css';

const Home = () => {
    const navigate = useNavigate();
    // const [visitor, setVisitor] = useState(localStorage.getItem("wedVisitor"));
    // const [visitorInput, setVisitorInput] = useState("");

    // useEffect(() => {
    //     if (visitor == null || visitor == "") {
    //         document.getElementById('my_modal_1').showModal();
    //     }
    // }, [visitor]);

    // const handleInput = (e) => {
    //     let username = e.target.value.toLowerCase();
    //     username = username.charAt(0).toUpperCase() + username.slice(1);
    //     setVisitorInput(username);
    // }

    // const setVisitorKey = (e) => {
    //     localStorage.setItem('wedVisitor', visitorInput);
    // }

    const openGalary = () => {
        let visitKey = "Wendom";
        localStorage.setItem('wedVisitor', visitKey);
        navigate("/Gallery");
    }

  return (
    <div className='absolute inset-0'>
        <section className='fixed top-0 left-0 w-full z-20'>
            <Nav/>
        </section>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" >open modal</button> */}
            {/* <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Welcome to Wendom 2026!</h3>
                <p className="py-4">Enter PassKey...</p>
                <section>
                    <input onChange={handleInput} type="text" placeholder="Type in pass.." className="input validator input-warning" required />
                    <p className="validator-hint hidden">Required</p>
                </section>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={setVisitorKey} className="btn">Submit</button>
                    </form>
                </div>
            </div>
            </dialog> */}

            <main className="relative min-h-screen w-full bg-[url('/img1.jpg')] bg-cover bg-center bg-no-repeat">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Centered Content */}
                <div className="relative min-h-screen z-1 flex flex-col items-center justify-center text-center px-6 text-white">
                    <h2 className="font-serif text-4xl md:text-6xl font-semibold mb-6 leading-11 overflow-hidden">
                        <span className='block animate__animated animate__backInLeft'>Capturing Love,</span>
                        <span className='block animate__animated animate__backInRight'>One Moment at a Time</span>
                    </h2>

                    <p className="max-w-2xl leading-6 text-sm md:text-base text-neutral-200 mb-10 animate__animated animate__zoomIn">
                        Explore timeless wedding memories 
                        beautifully preserved through elegant 
                        photography and cinematic storytelling.
                    </p>

                    <p>
                        <button onClick={openGalary} className='btn btn-secondary text-lg px-10 py-6 animate__animated animate__zoomInUp mr-2'>Gallery</button>
                        <Link to={"/Story"}><button className='btn btn-secondary text-lg px-10 py-6 animate__animated animate__zoomInUp ml-2'>Story</button></Link>
                    </p>
                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default Home
