import React from 'react'

function CategoryItem({item}) {
  return (
    <div className='flex-1 m-1 relative'>
        <img className='w-full h-3/4 object-cover' 
        src={item.img}/>
        <div>
            <div className=' absolute h-full w-full top-0 left-0 flex items-center justify-center flex-col'>
            <div className='text-3xl mb-4 font-bold text-white'>{item.title}</div> 
            <button className='rounded bg-white p-1'>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default CategoryItem
