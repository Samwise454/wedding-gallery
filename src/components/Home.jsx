import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';
import 'animate.css';

const Home = () => {
    const navigate = useNavigate();

  return (
    <div className='absolute inset-0'>
        <Nav/>
            <main className="relative min-h-screen w-full bg-[url('/bg2.jpg')] bg-cover bg-center bg-no-repeat">
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
                        <Link to={"/Gallery"}><button className='btn btn-secondary text-lg px-10 py-6 animate__animated animate__zoomInUp mr-2'>Gallery</button></Link>
                        <Link to={"/Story"}><button className='btn btn-secondary text-lg px-10 py-6 animate__animated animate__zoomInUp ml-2'>Stories</button></Link>
                    </p>
                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default Home
