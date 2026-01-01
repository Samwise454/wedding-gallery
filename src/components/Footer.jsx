import React from 'react'

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content px-4 py-1 fixed bottom-0 left-0 z-5">
        <aside>
            {/* <p> &#10084; WENDOM {new Date().getFullYear()} &#10084;</p> */}
            <p className='flex flex-row items-center'>
                Powered by <a href="https://esbatech.org" target='_blank' className='mx-1 text-yellow-300'>EsbaTech</a>  
                <img className='w-10 h-10 rounded-full ml-2' src="/esba.jpg" alt="EsbaTech Image" />
            </p>
        </aside>
    </footer>
  )
}

export default Footer
