import React from 'react'

function CategoryItem({item}) {
  return (
    <div>
        <div>
            <img src={item.img}/>
        </div>
        <div>
            <div>{item.title}</div>
            <button>SHOP NOW</button>
        </div>
    </div>
  )
}

export default CategoryItem
