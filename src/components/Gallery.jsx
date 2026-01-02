import React from 'react';
import { useNavigate, Link } from 'react-router';
import 'animate.css';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
    const navigate = useNavigate();

    const openShow = (e) => {
        let id = e.currentTarget.id;
        
        navigate('/show?'+id);
    }

  return (
    <div>
        <Nav/>

        <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} className='absolute z-2 text-yellow-300 top-0 right-0 mt-6 mr-5 animate__animated animate__slideInRight'/>
        </Link>

        <main className="relative mt-8 min-h-screen w-full bg-black bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Cards */}
            <div className='grid grid-cols-2 lg:grid-cols-6 lg:pt-60 p-2 gap-2 overflow-hidden cursor-pointer'>
                <div onClick={openShow} id='bride' className="card bg-white w-full shadow-sm ">
                    <figure className="px-4 pt-4">
                        <img
                        src="/bride.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22 max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Bride</h2>
                    </div>
                </div>

                <div onClick={openShow} id='groom' className="card bg-white w-full shadow-sm">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22 max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Groom</h2>
                    </div>
                </div>

                <div onClick={openShow} id='couple' className="card bg-white w-full shadow-sm animate__animated animate__zoomIn">
                    <figure className="px-4 pt-4">
                        <img
                        src="/couple.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22 max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Couple</h2>
                    </div>
                </div>

                <div onClick={openShow} id='reception' className="card bg-white w-full shadow-sm">
                    <figure className="px-4 pt-4">
                        <img
                        src="/bg2.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22 max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Reception</h2>
                    </div>
                </div>

                <div onClick={openShow} id='dance' className="card bg-white w-full shadow-sm">
                    <figure className="px-4 pt-4">
                        <img
                        src="/dance.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22 max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Dance</h2>
                    </div>
                </div>

                <div onClick={openShow} id='bts' className="card bg-white w-full shadow-sm">
                    <figure className="px-4 pt-4">
                        <img
                        src="/bts.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h- max-h-22 w-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">PWP</h2>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Gallery
