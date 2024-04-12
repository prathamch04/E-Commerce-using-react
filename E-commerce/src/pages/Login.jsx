import React from 'react'

function Login() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-opacity-50 to-opacity-50 bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")' }}></div>
      <div className="relative z-10 w-4/6 sm:w-3/4 lg:w-2/5 xl:w-1/3 bg-white p-8">
        <h1 className="text-2xl font-light mb-4">SIGN IN</h1>
        <form className="flex flex-col">
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="username" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="password" />
          <button className="w-40 bg-teal-500 text-white py-2 px-4 rounded-md">LOG IN</button>
          <h1 className='text-sm mt-4 cursor-pointer underline '>FORGOT PASSWORD?</h1>
          <h1 className='text-sm mt-2 cursor-pointer underline'>CREATE A NEW ACCOUNT</h1>
        </form>
      </div>
    </div>
  );
};

export default Login
