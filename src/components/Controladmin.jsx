import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import 'animate.css';

const Controladmin = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState(localStorage.getItem("wedAdmin"));
    const [addAdmin, setAddAdmin] = useState("https://wedding.esbatech.org/addAdmin.php");
    const [addStory, setAddStory] = useState("https://wedding.esbatech.org/addStory.php");
    const [getAgent, setGetAgent] = useState("https://wedding.esbatech.org/getAgent.php");
    const [submitState, setSubmitState] = useState("false");
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });
    const [storyData, setStoryData] = useState({
        agent: "",
        slang: "",
        headline: "",
        story: ""
    });
    const [allAgent, setAllAgent] = useState([]);

    useEffect(() => {
        if (admin == null || admin == "") {
            navigate("/Admin");
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("wedAdmin");
        navigate("/Admin");
    }

    const [action, setAction] = useState("");
    const handleAction = (e) => {
        setAction(e.target.id);
        if (e.target.id == "agent") {
            //fetch all agents data
            const getAllAgent = async () => {
                //run axios
                try {
                    const response = await axios.get(getAgent);
                    // console.log(response.data)
                    if (response.status === 200) {
                        setAllAgent(response.data);
                    }
                    else {
                        setAllAgent([]);
                    }
                } catch (err) {
                    setAllAgent([]);
                }
            }
            getAllAgent();
        }
    }

    const handleAdminInput = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        setUserData({...userData, [id]: val});
    }

    const submitAdmin = (e) => {
        e.preventDefault();
        setSubmitState("true");
        const addAdminForm = document.querySelector("#addAdminForm");

        const handleResponse = (msg) => {
            setSubmitState(msg);
            if (msg === "done") {
                setTimeout(() => {
                    addAdminForm.reset();
                    setSubmitState("false");
                }, 3000);
            }
            else {
                setTimeout(() => {
                    setSubmitState("false");
                }, 3000);
            }
        } 

        const submitAdmin = async () => {
            try {
                const response = await axios.post(addAdmin, JSON.stringify(userData));
                if (response.status === 200) {
                    if (response.data.code === "sw321") {
                        handleResponse("done");
                        setUserData({
                            username: "",
                            password: ""
                        });
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
        submitAdmin();
    }

    const handleInputStory = (e) => {
        let id = e.target.id;
        let val = e.target.value;
        setStoryData({...storyData, [id]: val});
    }

    const submitStory = (e) => {
        e.preventDefault();
        
        setSubmitState("true");
        const storyForm = document.querySelector("#storyForm");

        const handleResponse = (msg) => {
            setSubmitState(msg);
            if (msg === "done") {
                setTimeout(() => {
                    storyForm.reset();
                    setSubmitState("false");
                }, 3000);
            }
            else {
                setTimeout(() => {
                    setSubmitState("false");
                }, 3000);
            }
        } 

        const submitStory = async () => {
            try {
                const response = await axios.post(addStory, JSON.stringify(storyData));
                if (response.status === 200) {
                    // console.log(response.data)
                    if (response.data.code === "sw321") {
                        handleResponse("done");
                        setStoryData({
                            agent: "",
                            slang: "",
                            headline: "",
                            story: ""
                        });
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
     submitStory();
    }

  return (
    <div>
        <Nav/>
 
        <FontAwesomeIcon onClick={logout} icon={faArrowRightFromBracket} className='absolute z-2 text-yellow-300 text-xl top-0 right-0 mt-5 mr-5 animate__animated animate__slideInRight'/>

        <main className='bg-base-200 p-4 min-h-screen'>
            <div className='w-full oevrflow-x-auto flex items-center justify-center gap-2 pt-10'>
                <button onClick={handleAction} id='admin' className='btn btn-primary'>Create Admin</button>
                <button onClick={handleAction} id='content' className='btn btn-primary'>Add Content</button>
                <button onClick={handleAction} id='agent' className='btn btn-primary'>View Agents</button>
            </div>

            {action == "admin" ?
                <form action="#" id='addAdminForm' onSubmit={submitAdmin} className='animate__animated animate__zoomIn overflow-hidden flex items-center justify-center pt-10'>
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
                action == "content" ?
                    <form action="#" onSubmit={submitStory} id='storyForm' className='animate__animated animate__zoomIn overflow-hidden flex items-center justify-center pt-10'>
                        <section className='bg-base-300 border-base-300 rounded-box w-xs border p-4'>
                            <fieldset className="fieldset">
                                <label className="label">Agent Name</label>
                                <input onChange={handleInputStory} id='agent' type="text" className="input validator" placeholder="Agent Username" required />
                                <p className="validator-hint hidden">Required</p>
                                <legend className="fieldset-legend text-lg mb-4">Add Story Details</legend>
                            </fieldset>

                            <label className="fieldset mt-3">
                                <span className="label">Slang</span>
                                <input onChange={handleInputStory} id='slang' type="text" className="input validator" placeholder="Slang eg WenDom 2026" required />
                                <span className="validator-hint hidden">Required</span>
                            </label>

                            <label className="fieldset mt-3">
                                <span className="label">Story Headline</span>
                                <input onChange={handleInputStory} id='headline' type="text" className="input validator" placeholder="Story Head eg Chinwendu & Chidi 2026" required />
                                <span className="validator-hint hidden">Required</span>
                            </label>

                            <fieldset className="fieldset mt-3">
                                <legend className="label">Story</legend>
                                <textarea onChange={handleInputStory} id='story' className="textarea h-24 input validator" placeholder="Story" required ></textarea>
                                <span className="validator-hint hidden">Required</span>
                            </fieldset>

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
                                                        <button className="btn btn-secondary mt-4" type="submit">No agent</button>
                                                    :
                                                        <button className="btn btn-secondary mt-4" type="submit">Submit</button>
                                    }
                            </section>
                        </section>
                    </form>
                :
                    action == "agent" ?
                        <div className="animate__animated animate__zoomIn overflow-hidden pt-10">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Agent Name</th>
                                        <th>Password</th>
                                        {/* <th>Favorite Color</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {allAgent ?
                                        allAgent.map((data, dataIndex) => {
                                            return (
                                                <tr key={dataIndex}>
                                                    <th>{dataIndex + 1}</th>
                                                    <td>{data.username}</td>
                                                    <td>{data.password}</td>
                                                </tr>
                                            )
                                        })
                                    :
                                        <tr></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    :
                        ""
            }
        </main>
    </div>
  )
}

export default Controladmin
