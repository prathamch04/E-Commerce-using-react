import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className='flex w-full h-screen relative overflow-hidden'>
      <div
        onClick={() => handleClick("left")}
        className='flex items-center justify-center w-20 h-10 bg-gray-100 rounded-full absolute top-0 bottom-0 m-auto cursor-pointer'
        style={{ left: slideIndex === 0 && "10px" }}
      >
        <ChevronLeftIcon />
      </div>
      <div
        className='h-full flex transition-all'
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {sliderItems.map((item, index) => (
          <div key={index} className='flex items-center w-screen h-screen'>
            <div className='h-full flex-1'>
              <img src={item.img} alt={item.title} className='ml-32 h-4/5' />
            </div>
            <div className='flex-1 mr-16 h-1/2'>
              <h1 className='text-7xl'>{item.title}</h1>
              <p className='mt-8 text-xl tracking-widest'>{item.desc}</p>
              <Link to={'/productlist'} className='bg-gray-300 absolute mt-8 p-3 rounded-lg'>SHOP NOW</Link>
            </div>
          </div>
        ))}
      </div>
      <div
        onClick={() => handleClick("right")}
        className='flex items-center justify-center w-20 h-10 bg-gray-100 rounded-full absolute top-0 bottom-0 m-auto right-0 cursor-pointer'
        style={{ right: slideIndex === 2 && "10px" }}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
}

export default Slider;

