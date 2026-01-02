import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Show = () => {
    const [uri, setUri] = useState(window.location.href);
    const [zoomedImage, setZoomedImage] = useState("");
    const [toggleLoader, setToggleLoader] = useState("");

    useEffect(() => {
        let splitUri = uri.split("?");
        let code = splitUri[1];

        //after fetching items, hide loader using toggleLoader
        setToggleLoader('animate__animated animate__zoomOut');
    }, []);

    const zoomImage = (e) => {
        setZoomedImage(e.currentTarget.id);
    }
    const [totalImage, setTotalImage] = useState(100);

    const changeImage = (e) => {
        let btn = e.currentTarget.id;//could be n or b - next or back
        let breakImg = zoomedImage.split(".");//eg bg1.jpg - we break at the .
        let imgName = breakImg[0];//eg bg1
        let imgExt = breakImg[1];//eg jpg 

        //we break the imgName down further
        let imgSplit = imgName.split("g");//this breaks img1 or bg1 into 2 parts
        let imgNameInit = imgSplit[0];//this is the initial part of the image name
        let imgNum = imgSplit[1];// this is the number at the end of the image

        let nextImg = "";
        let img = "";

        switch(btn) {
            case 'n':
                if (imgNum == totalImage) {//we have gotten to the end of the image, we start again
                    nextImg = 1;
                }
                else {
                    nextImg = parseInt(imgNum) + 1;//we increment the image number to get next image
                }
                img = imgNameInit+"g"+nextImg+"."+imgExt;
                setZoomedImage(img);
                break;
            case 'b':
                if (imgNum == 1) {//means we have reached last image, therefore we reset counter using totalImage
                    nextImg = totalImage;
                }
                else {
                    nextImg = parseInt(imgNum) - 1;//we reduce the image number to get next image
                }
                img = imgNameInit+"g"+nextImg+"."+imgExt;
                setZoomedImage(img);
                break;
        }
    }

    const closeModal = () => {
        setTimeout(() => {
            setZoomedImage("");
        }, 200);
    }

  return (
    <div>
        <Nav/>

        <main className='relative'>
            <div className={toggleLoader}>
                <div className='loader absolute top-0 left-0 w-full z-10 h-screen bg-black inset-0 flex items-center justify-center'>
                    <span className="loading loading-infinity loading-xl"></span>
                </div>
            </div>
            <Link to={"/Gallery"}>
                <FontAwesomeIcon icon={faArrowLeft} className='absolute top-0 right-0 mt-5 mr-5 animate__animated animate__slideInRight'/>
            </Link>

            {/* Cards */}
            <div className='grid grid-cols-2 lg:grid-cols-6  p-2 pt-15 gap-2 overflow-y-auto cursor-pointer'>
                {/* <label htmlFor="my_modal_6"></label> */}
                <label htmlFor="my_modal_6" >
                    <div onClick={zoomImage} id='bg1.jpg' className="card bg-white">
                        <figure className="p-1">
                            <img
                            src="/bride.jpg"
                            alt="Shoes"
                            className="rounded-xl min-h-27 w-full object-cover" />
                        </figure>
                    </div>
                </label>

                <label htmlFor="my_modal_6">
                    <div onClick={zoomImage} id='bg4.jpg' className="card bg-white w-full shadow-sm">
                        <figure className="p-1">
                            <img
                            src="/groom.jpg"
                            alt="Shoes"
                            className="rounded-xl min-h-27 w-full object-cover" />
                        </figure>
                    </div>
                </label>

                {/* modal to display zoomed image */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className="py-4">
                            <img src={"/"+zoomedImage} alt="Image1" />
                        </div>
                        <div className="modal-action">
                            <section className='text-center w-full'>
                                <button className='btn mr-8' id='b' onClick={changeImage}>Back</button>
                                <button className='btn ml-8' id='n' onClick={changeImage}>Next</button>
                            </section>
                        </div>
                        <label htmlFor="my_modal_6">
                            <FontAwesomeIcon onClick={closeModal} className='cursor-pointer absolute top-0 right-0 mt-2 mr-2 text-red-500 text-2xl' icon={faXmark}/>
                        </label>
                    </div>
                </div>    
            </div>
        </main>
    </div>
  )
}

export default Show
