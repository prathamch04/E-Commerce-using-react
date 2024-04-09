import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Product({item}){
  return (
    <div className='flex-1 m-2'>
      <circle className='' />
      <img src={item.img} />
      <div>
        <div>
            <ShoppingCartOutlinedIcon />
        </div>
        <div>
            <SearchIcon />
        </div>
        <div>
            <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default Product
