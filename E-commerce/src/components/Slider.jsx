import React, { useState } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0)
  
  return (
    <div className='flex w-full h-screen relative overflow-hidden'>
      <div onClick={() => handleClick(left)} className='flex items-center justify-center w-20 h-10 bg-gray-100 rounded-full absolute top-0 bottom-0 m-auto cursor-pointer'>
      <ChevronLeftIcon/>
      </div>
      <div className='h-full flex -translate-x-0 '>
        <div className='flex items-center w-screen h-screen'>
          <div className='h-full flex-1'>
            <img src="https://i.ibb.co/DG69bQ4/2.png" className='ml-32 h-4/5' />
          </div>
          <div className='flex-1 mr-16'>
            <h1 className='text-7xl'>SUMMER SALE</h1>
            <p className='mt-8 text-xl tracking-widest'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <button className='bg-gray-300 mt-6 p-3 rounded-lg '>SHOP NOW</button>
          </div>
        </div>

        <div className='flex items-center w-screen h-screen'>
          <div className='h-full flex-1'>
            <img src="https://i.ibb.co/DG69bQ4/2.png" className='ml-32 h-4/5' />
          </div>
          <div className='flex-1 mr-16'>
            <h1 className='text-7xl'>WINTER SALE</h1>
            <p className='mt-8 text-xl tracking-widest'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <button className='bg-gray-300 mt-6 p-3 rounded-lg '>SHOP NOW</button>
          </div>
        </div>

        <div className='flex items-center w-screen h-screen'>
          <div className='h-full flex-1'>
            <img src="https://i.ibb.co/DG69bQ4/2.png" className='ml-32 h-4/5' />
          </div>
          <div className='flex-1 mr-16'>
            <h1 className='text-7xl'>SALE</h1>
            <p className='mt-8 text-xl tracking-widest'>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</p>
            <button className='bg-gray-300 mt-6 p-3 rounded-lg '>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div onClick={() => handleClick("right")} className='flex items-center justify-center w-20 h-10 bg-gray-100 rounded-full absolute top-0 bottom-0 m-auto right-0 cursor-pointer'>
      <ChevronRightIcon/>
      </div>
    </div>
  )
}

export default Slider
