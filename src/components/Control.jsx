import React from 'react'
import Nav from './Nav'

const Control = () => {
  return (
    <div>
      <Nav/>

        <form action="" className='flex items-center justify-center w-full min-h-screen'>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">Login</legend>

                <label htmlFor='username' className="label">Username</label>
                <input type="text" id='username' className="input" placeholder="Username" />

                <label htmlFor='password' className="label mt-5">Password</label>
                <input type="password" id='password' className="input" placeholder="Password" />

                <button className="btn btn-secondary mt-4">Login</button>
            </fieldset>
        </form>
    </div>
  )
}

export default Control
