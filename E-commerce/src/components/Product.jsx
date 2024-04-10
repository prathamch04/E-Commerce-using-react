import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Product({item}){
  return (
    <div className='flex-1 m-2 min-w-72 h-96 flex justify-center items-center bg-gray-100 relative'>
      <circle className='w-48 h-48 rounded-full bg-white absolute' />
      <img className='h-3/4 z-10' src={item.img} />
      <div className='h-full w-full absolute top-0 bg-black bg-opacity-20 opacity-0 left-0 z-20 flex items-center justify-center transition duration-500 ease-in-out cursor-pointer hover:opacity-100'>
        <div className='m-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 '>
            <ShoppingCartOutlinedIcon />
        </div>
        <div className='m-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 '>
            <SearchIcon />
        </div>
        <div className='m-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:scale-110 '>
            <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default Product