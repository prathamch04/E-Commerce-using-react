import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'

function Products() {
  return (
    <div className='p-5 flex flex-wrap justify-between'>
      {popularProducts.map((item) => (
        <Product item = {item} key={item.id} />
      ))}
    </div>
  )
}

export default Products
