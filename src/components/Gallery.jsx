import React from 'react';
import 'animate.css';
import Nav from './Nav';

const Gallery = () => {
  return (
    <div>
        <Nav/>

        <main className="relative mt-8 min-h-screen w-full bg-[url('/bg3.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Cards */}
            {/* <div className='grid grid-cols-2 lg:grid-cols-5 p-2 gap-2 overflow-hidden'>
                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/bride.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Bride</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInRight">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Groom</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Couple</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInRight">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Reception</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Dance</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInRight">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">BTS</h2>
                    </div>
                </div>
            </div> */}

            {/* Cards */}
            <div className='grid grid-cols-2 lg:grid-cols-5 p-2 gap-2 overflow-hidden'>
                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/bride.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Bride</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Groom</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInRight">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Couple</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInRight">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Reception</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">Dance</h2>
                    </div>
                </div>

                <div className="card bg-white w-full shadow-sm animate__animated animate__slideInLeft">
                    <figure className="px-4 pt-4">
                        <img
                        src="/groom.jpg"
                        alt="Shoes"
                        className="rounded-xl min-h-22" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title bg-base-100 px-3 py-1 rounded-full">BTS</h2>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Gallery
