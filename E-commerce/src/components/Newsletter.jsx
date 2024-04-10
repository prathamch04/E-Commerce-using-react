import React from 'react'
import SendIcon from '@mui/icons-material/Send';

function Newsletter() {
  return (
    <div className='h-48 bg-gray-100 flex flex-col items-center justify-center'>
      <div className='font-bold text-4xl mb-4'>Newsletter</div>
      <div className='text-xl mb-4'> Get timely updates for your favorite products.</div>
      <div className='w-1/3 h-10 flex justify-between bg-white '>
        <input className='w-1/4' placeholder='Your Email' />
        <button>
            <SendIcon />
        </button>
      </div>
    </div>
  )
}

export default Newsletter
