import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-15'>
      <div className='py-2 pl-5 flex justify-between'>
        <div className='w-1/3 cursor-pointer'>
          <div className='flex items-center'>
            <div className='mt-1'>EN</div>
            <div className='border ml-10 w-60 justify-center p-1'>
              <input type="text" />
              <SearchIcon style={{color:"gray", fontSize:"16px"}} />
            </div>
          </div>
        </div>
        <div className='flex w-1/3 cursor-pointer items-center justify-center'>
          <NavLink to={'/'} className='font-bold text-3xl'>
            SHOP IT.
          </NavLink>
        </div>
        <div className=' w-1/3 cursor-pointer items-center'>
          <div className='flex items-center gap-7 p-2 justify-end mr-4'>
            <NavLink to={'/register'}>REGISTER</NavLink>
            <NavLink to={'/signin'}>SIGN IN</NavLink>
            <Badge badgeContent={4} color="success">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
