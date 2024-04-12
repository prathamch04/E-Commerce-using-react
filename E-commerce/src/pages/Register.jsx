import React from 'react'

function Register() {
  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-opacity-50 to-opacity-50 bg-cover bg-center z-0" style={{ backgroundImage: 'url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")' }}></div>
      <div className="relative z-10 w-3/5 sm:w-3/4 lg:w-2/5 xl:w-1/3 bg-white p-8">
        <h1 className="text-2xl font-light mb-4">CREATE AN ACCOUNT</h1>
        <form className="flex flex-wrap">
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="name" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="last name" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="username" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="email" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="password" />
          <input className="flex-1 min-w-40 mb-4 mr-2 px-4 py-2 border border-gray-300" placeholder="confirm password" />
          <p className="text-xs mb-4">
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button className="w-40 bg-teal-500 text-white py-2 px-4 rounded-md">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register

