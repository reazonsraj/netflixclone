import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen '>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/0f07b807-7be1-457d-be88-eb9153d5d4e9/8974f83b-9dfb-4e1b-88dd-434bd6207b31/AU-en-20220815-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50 items-center mt-60'>
    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
<div className='max-w[320px mx-auto py-16'>
<h1 className='text-3xl font-bold ml-4'>Login</h1>
<form className='w-full flex flex-col py-4'>
    <input className='p-3 my-2 bg-gray-700 rounded w-[400px] h-[60px] ml-4' type="email" placeholder="Email or Phone Number"/>
    <input className='p-3 my-2 bg-gray-700 rounded w-[400px] h-[60px] ml-4' type="password" placeholder="Password"/>
    </form>

    <button className='bg-red-600 py-3 my-6 rounded font-bold   w-[400px] h-[60px] ml-4'>Login</button>
    <div className='flex justify-between items-center text-gray-400'>
        <p><input className='mr-2' type="checkbox"/>Remeber me</p>
        
        <p>New to Netflix?</p>
    </div>
</div>

</div>

    </div>





    </div>
  )
}

export default Login