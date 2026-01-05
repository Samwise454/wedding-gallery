import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Story = () => {
  return (
    <div>
      <Nav/>
      
        <Link to={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} className='absolute z-2 text-yellow-300 top-0 right-0 mt-6 mr-5 animate__animated animate__slideInRight'/>
        </Link>

        <main className="relative min-h-screen w-full bg-[url('/img9.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>
            
            <div className='relative z-1 text-center pt-10'>
                <h2 className='w-full overflow-hidden text-4xl font-bold leading-12'>
                    <span className='block animate__animated animate__fadeInRight'>Chinwendu & Chidi <br /></span>
                    <span className='block animate__animated animate__fadeInLeft'>2026</span>
                </h2>

                <p className='mt-2 animate__animated animate__zoomInDown'>
                    <span>
                        Real moments.  
                        <span className="text-rotate ml-3">
                            <span>
                            <span className="bg-yellow-400 text-black px-2 text-sm py-0.5 rounded-full">Real Love</span>
                            <span className="bg-white text-black px-2 text-sm py-0.5 rounded-full">Real Memories</span>
                            <span className="bg-teal-300 text-black px-2 text-sm py-0.5 rounded-full">WenDom 2026</span>
                            </span>
                        </span>
                    </span>
                </p>

                <div className='h-full shadow-sm rounded-xl mx-2 mt-4 overflow-auto animate__animated animate__slideInUp'>
                    <p className='text-justify backdrop-blur-sm p-2'>
                        Our story didn't start with a movie-moment gaze across 
                        a crowded room. It started with a football club banter. 
                        Real love, for us, has always been found in the quiet 
                        intervals between big milestones. It's the passion for 
                        the sports and meticulousness that made us realize this 
                        was it. We've this road and realized that as long as we 
                        were laughing through the chaos, we were exactly where 
                        we needed to be. The proposal was perfectly imperfect 
                        on a rainy Tuesday. No frills, just us. We can't wait 
                        to celebrate the start of our next chapter with you all
                         on the 6th of January, 2026.
                    </p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Story
