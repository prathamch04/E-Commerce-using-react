import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='flex'>
      
      <div className='flex-1 flex flex-col p-4'>
        <h1 className='text-3xl font-bold'>LAMA.</h1>
        <p className='mt-4 mb-0'>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</p>
        <div className='flex gap-3 m-2'>
            <div>
                <FacebookIcon />
            </div>
            <div>
                <InstagramIcon />
            </div>
            <div>
                <XIcon />
            </div>
            <div>
                <PinterestIcon />
            </div>
        </div>
      </div>

      
      <div className='flex-1 p-4'>
        <h1 className='text-xl font-bold mb-6'>Useful Links</h1>
        <ul className='m-0 p-0 flex flex-wrap '>
          <li className='w-1/2 mb-2'>Home</li>
          <li className='w-1/2 mb-2'>Cart</li>
          <li className='w-1/2 mb-2'>Man Fashion</li>
          <li className='w-1/2 mb-2'>Accessories</li>
          <li className='w-1/2 mb-2 '>My Account</li>
          <li className='w-1/2 mb-2'>Order Tracking</li>
          <li className='w-1/2 mb-2'>Wishlist</li>
          <li className='w-1/2 mb-2'>Terms</li>
        </ul>
      </div>
      
      
      <div className='flex-1 p-4'>
        <h1 className='mb-6 text-xl font-bold'>Contacts</h1>
        <div className='mb-4'>
          <MapIcon /> 206, Sai Kripa Residency, Aligarh
        </div>
        <div className='mb-4'>
          <PhoneIcon /> +91 7983651324
        </div>
        <div className='mb-4'>
          <EmailIcon /> contact@lama.com
        </div>
      </div>
    </div>
  )
}

export default Footer
