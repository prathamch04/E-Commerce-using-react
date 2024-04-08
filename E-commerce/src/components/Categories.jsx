import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

function Categories() {
  return (
    <div className='flex p-5 justify-between'>
      {categories.map(item => (
        <CategoryItem item={item} />
      ))}
    </div>
  )
}

export default Categories
