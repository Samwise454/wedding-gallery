import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'animate.css';

const Controldash = () => {
    const [addImage, setAddImage] = useState("https://wedding.esbatech.org/addImage.php");
    const [admin, setAdmin] = useState(localStorage.getItem("wedControl"));
    const [submitState, setSubmitState] = useState("false");
    const [catSelect, setCatSelect] = useState("");
    const navigate = useNavigate();
    const [allFiles, setAllFiles] = useState([]);

    useEffect(() => {
        if (admin == null || admin == "") {
            navigate("/Control");
        }
    }, []);

    const [action, setAction] = useState("");
    const handleAction = (e) => {
        setAction(e.target.id);
    }

    const handleCat = (e) => {
        setCatSelect(e.target.value);
    }

    const handleImage = (e) => {
        const imgData = new FormData();
        let allImages = document.querySelector("#imgData");
        let imgFile = allImages.files;

        //let's loop through the image list and append key
        for(let i = 0; i < imgFile.length; i++) {
            imgData.append("image[]", imgFile[i]);
        }
        imgData.append("admin", admin);
        imgData.append("category", catSelect);
        setAllFiles(imgData);
    }

    const uploadFile = (e) => {
        e.preventDefault();
        setSubmitState("true");
        const addImageForm = document.querySelector("#addImageForm");

        const handleResponse = (msg) => {
            setSubmitState(msg);
            if (msg === "done") {
                setTimeout(() => {
                    addImageForm.reset();
                    setSubmitState("false");
                }, 3000);
            }
            else {
                setTimeout(() => {
                    setSubmitState("false");
                }, 3000);
            }
        } 

        if (allFiles.length == "") {
            handleResponse("sw123");
        }
        else {
            //we send the imgData  to the back for processing
            const sendImage = async () => {
                try {
                    const response = await axios.post(addImage, allFiles);
                    if (response.status === 200) {
                        // console.log(response.data);
                        if (response.data.code === "sw321") {
                            handleResponse("done");
                        }
                        else if (response.data.code === "sw123") {
                            handleResponse("sw123");
                        }
                        else {
                            handleResponse("error");
                        }
                    }
                } catch (err) {
                    handleResponse("error");
                }
            }
            sendImage();
        }
    }

    const logout = () => {
        localStorage.removeItem("wedControl");
        navigate("/Control");
    }
  return (
    <div>
        <Nav/>

        <FontAwesomeIcon onClick={logout} icon={faArrowRightFromBracket} className='absolute z-2 text-yellow-300 text-xl top-0 right-0 mt-5 mr-5 animate__animated animate__slideInRight'/>

        <main className='bg-base-200 p-4 min-h-screen'>
            <div className='w-full oevrflow-x-auto flex items-center justify-center gap-2 pt-10'>
                <button onClick={handleAction} id='addImage' className='btn btn-primary'>Add Image</button>
                {/* <button onClick={handleAction} id='addVideo' className='btn btn-primary'>Add Video</button> */}
                {/* <button onClick={handleAction} id='changePass' className='btn btn-primary'>Change Pass</button> */}
            </div>

            {action == "addImage" ?
                <form action="#" id='addImageForm' onSubmit={uploadFile} className='animate__animated animate__zoomIn overflow-hidden flex items-center justify-center pt-10'>
                    <section onChange={handleCat} className='bg-base-300 border-base-300 rounded-box w-xs border p-4 overflow-hidden'>
                        <select className="select select-secondary mb-8">
                            <option value="#">Select Image Category</option>
                            <option value="bride">Bride</option>
                            <option value="groom">Groom</option>
                            <option value="church">Church</option>
                            <option value="couple">Couple</option>
                            <option value="reception">Reception</option>
                            <option value="pwp">PWP</option>
                        </select>

                        {catSelect == "" ?
                            ""
                        :
                            <section className='animate__animated animate__bounceInRight'>
                                <input type="file" id='imgData' onChange={handleImage} className="file-input file-input-warning" multiple />
                            </section>
                        }

                        <section className='text-right mt-2'>
                            {submitState == "false" ?
                                <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                            :
                                submitState == "true" ?
                                    <button className="btn btn-secondary mt-4">
                                        <span className="loading loading-spinner"></span>
                                        Submitting
                                    </button>
                                :
                                    submitState == "done" ?
                                        <button className="btn btn-secondary mt-4" type="submit">Done</button>
                                    :
                                        submitState == "error" ?
                                            <button className="btn btn-secondary mt-4" type="submit">Error</button>
                                        :
                                            submitState == "sw123" ?
                                                <button className="btn btn-secondary mt-4" type="submit">No Image</button>
                                            :
                                                <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                            }
                        </section>
                    </section>
                </form>
            :
                action == "addVideo" ?
                    <form action="#" id='addVideoForm' onSubmit={submitAdmin} className='animate__animated animate__zoomIn overflow-hidden flex items-center justify-center pt-10'>
                        <section className='bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                            <fieldset className="fieldset">
                                <label className="label">Username</label>
                                <input onChange={handleAdminInput} id='username' type="text" className="input validator" placeholder="Username" required />
                                <p className="validator-hint hidden">Required</p>
                                <legend className="fieldset-legend text-lg mb-4">Create Admin</legend>
                            </fieldset>

                            <label className="fieldset mt-3">
                                <span className="label">Password</span>
                                <input onChange={handleAdminInput} id='password' type="text" className="input validator" placeholder="Password" required />
                                <span className="validator-hint hidden">Required</span>
                            </label>

                            <section className='text-right mt-2'>
                                {submitState == "false" ?
                                    <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                                :
                                    submitState == "true" ?
                                        <button className="btn btn-secondary mt-4">
                                            <span className="loading loading-spinner"></span>
                                            Submitting
                                        </button>
                                    :
                                        submitState == "done" ?
                                            <button className="btn btn-secondary mt-4" type="submit">Done</button>
                                        :
                                            submitState == "error" ?
                                                <button className="btn btn-secondary mt-4" type="submit">Error</button>
                                            :
                                                submitState == "sw123" ?
                                                    <button className="btn btn-secondary mt-4" type="submit">User {">"} 0</button>
                                                :
                                                    <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                                }
                            </section>
                        </section>
                    </form>
                :
                    action == "changePass" ?
                        <form action="#" id='addImageForm' onSubmit={submitAdmin} className='animate__animated animate__zoomIn overflow-hidden flex items-center justify-center pt-10'>
                            <section className='bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                                <fieldset className="fieldset">
                                    <label className="label">Username</label>
                                    <input onChange={handleAdminInput} id='username' type="text" className="input validator" placeholder="Username" required />
                                    <p className="validator-hint hidden">Required</p>
                                    <legend className="fieldset-legend text-lg mb-4">Create Admin</legend>
                                </fieldset>

                                <label className="fieldset mt-3">
                                    <span className="label">Password</span>
                                    <input onChange={handleAdminInput} id='password' type="text" className="input validator" placeholder="Password" required />
                                    <span className="validator-hint hidden">Required</span>
                                </label>

                                <section className='text-right mt-2'>
                                    {submitState == "false" ?
                                        <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                                    :
                                        submitState == "true" ?
                                            <button className="btn btn-secondary mt-4">
                                                <span className="loading loading-spinner"></span>
                                                Submitting
                                            </button>
                                        :
                                            submitState == "done" ?
                                                <button className="btn btn-secondary mt-4" type="submit">Done</button>
                                            :
                                                submitState == "error" ?
                                                    <button className="btn btn-secondary mt-4" type="submit">Error</button>
                                                :
                                                    submitState == "sw123" ?
                                                        <button className="btn btn-secondary mt-4" type="submit">User {">"} 0</button>
                                                    :
                                                        <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                                    }
                                </section>
                            </section>
                        </form>
                    :
                        ""
            }
        </main>
    </div>
  )
}

export default Controldash
