import React from 'react';
import Nav from './Nav';

const Story = () => {
  return (
    <div>
      <Nav/>

        <main className="relative min-h-screen w-full bg-[url('/bg4.jpg')] bg-cover bg-center bg-no-repeat">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className='relative z-1 text-center pt-10'>
                <h2 className='w-full overflow-hidden text-4xl font-bold leading-12'>
                    <span className='block animate__animated animate__fadeInRight'>Chinwendu & Chidi <br /></span>
                    <span className='block animate__animated animate__fadeInLeft'>2026</span>
                </h2>

                <p className='mt-2 animate__animated animate__zoomInDown'>
                    {/* Real moments. Timeless memories. */}
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

                <div className='h-118 shadow-sm rounded-xl mx-2 mt-4 overflow-auto animate__animated animate__slideInUp'>
                    <p className='text-left backdrop-blur-sm p-2'>
                        "Our story didn't start with a movie-moment gaze across a crowded room. 
                        It started with [mention a relatable, small detail, e.g., a debate over 
                        the best bagel shop or a mutual struggle with a gym locker] in [Year].
                        Real love, for us, has always been found in the quiet intervals between big 
                        milestones. It's the [mention a specific 'real' habit, e.g., early morning 
                        coffee runs or shared playlists for road trips] that made us realize this was it. 
                        We've navigated [mention a life change, e.g., three cross-country moves or 
                        adopting a senior dog] and realized that as long as we were laughing through 
                        the chaos, we were exactly where we needed to be.
                        The proposal was [Description: e.g., perfectly imperfect on a rainy Tuesday / a 
                        total surprise during a backyard pizza night]. No frills, just us. We can't wait to 
                        celebrate the start of our next chapter with you all on [Wedding Date]."
                    </p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Story
