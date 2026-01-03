import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Show = () => {
    const [getImage, setGetImage] = useState("https://wedding.esbatech.org/getImage.php");
    const [uri, setUri] = useState(window.location.href);
    const [zoomedImage, setZoomedImage] = useState("");
    const [toggleLoader, setToggleLoader] = useState("");
    const [imgData, setImgData] = useState([]);//all image data here
    const [agent, setAgent] = useState(localStorage.getItem("wedVisitor"));
    const [imgSrc, setImgSrc] = useState("");
    const [loaderDisp, setLoaderDisp] = useState(true);
    const [totalImage, setTotalImage] = useState(0);

    useEffect(() => {
        let splitUri = uri.split("?");
        let code = {
            category: splitUri[1],
            agent: agent
        };

        //after fetching items, hide loader using setToggleLoader
        const getAllImage = async () => {
            try {
                const response = await axios.post(getImage, JSON.stringify(code));
                // console.log(response.data);
                if (response.status === 200) {
                    setImgData(response.data);
                    setTotalImage(response.data.length);
                    setImgSrc("https://wedding.esbatech.org/uploads/"+agent+"/");  
                }
                else {
                    setImgData([]);
                }
            } catch (err) {
                setImgData([]);
            } finally {
                setToggleLoader('animate__animated animate__zoomOut');
                setLoaderDisp(false);
            }
        }
        getAllImage();
    }, [agent]);

    const zoomImage = (e) => {
        setZoomedImage(e.currentTarget.id);
    }

    const changeImage = (e) => {
        let btn = e.currentTarget.id;//could be n or b - next or back
        let breakImg = zoomedImage.split("_");//eg bride_1 - we break at the _
        let imgName = breakImg[0];//eg bride
        let imgNum = breakImg[1];//eg 1 

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
                img = imgName + "_" + nextImg;
                setZoomedImage(img);
                break;
            case 'b':
                if (imgNum == 1) {//means we have reached last image, therefore we reset counter using totalImage
                    nextImg = totalImage;
                }
                else {
                    nextImg = parseInt(imgNum) - 1;//we reduce the image number to get next image
                }
                img = imgName + "_" + nextImg;
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

        <Link to={"/Gallery"}>
            <FontAwesomeIcon icon={faArrowLeft} className='absolute z-2 text-yellow-300 top-0 right-0 mt-6 mr-5 animate__animated animate__slideInRight'/>
        </Link>

        <main className='relative'>
            {loaderDisp === true ?
                <div className={toggleLoader}>
                    <div className='loader absolute top-0 left-0 w-full z-2 h-screen bg-black inset-0 flex items-center justify-center'>
                        <span className="loading loading-infinity loading-xl"></span>
                    </div>
                </div>
            :
                ""
            }

            {/* Cards */}
            <div className='h-195 grid grid-cols-2 lg:grid-cols-6 p-2 pt-10 gap-2 z-10 overflow-y-scroll cursor-pointer'>
                {/* <label htmlFor="my_modal_6"></label> */}
                {imgData ?
                    imgData.map((data, dataIndex) => {
                        return (
                            <label htmlFor="my_modal_6" key={dataIndex}>
                                <div onClick={zoomImage} id={data.img} className="card bg-white">
                                    <figure className="p-1">
                                        <img
                                            onClick={zoomImage}
                                            id={data.img}
                                            src={imgSrc+data.img}
                                            alt={data.img}
                                        className="rounded-xl min-h-27 w-full h-auto object-cover" />
                                    </figure>
                                </div>
                            </label>
                        )
                    })
                :
                    ""
                }

                {/* modal to display zoomed image */}
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal" role="dialog">
                    <div className="modal-box">
                        <div className="py-4">
                            {imgSrc !== "" ?
                                <img src={imgSrc+zoomedImage} alt="Image1" />
                            :
                                <img src="#" alt="Image1" />
                            }
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
