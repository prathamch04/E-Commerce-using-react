import React from 'react'
import Navbar from "../components/Navbar"
import Announcement from "../components/Annoucement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

function ProductList() {
  return (
    <div>
      <h1 className='text-2xl font-bold m-4'>Dresses</h1>
      <div className='flex justify-between m-4'>
        <div className='m-4 flex'>
          <div className='text-lg font-semibold mr-4'>Filter Products:</div>
          <select className='border'>
            <option disabled selected>Color</option>
            <option>White</option>
            <option>Green</option>
            <option>Red</option>
            <option>Black</option>
            <option>Yellow</option>
            <option>Blue</option>
          </select>
          
          <select className='border '>
            <option disabled selected>Size</option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className='m-4 flex'>
          <div className='text-lg font-semibold mr-4'>Sort Products:</div>
          <select className='border'>
            <option selected>Newest</option>
            <option>Price (low to high)</option>
            <option>Price (high to low)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
    
    </div>
  )
}

export default ProductList
