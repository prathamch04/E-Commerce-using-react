import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function Product() {
    return (
        <div>
            <Navbar />
            <Annoucement />
            <div className='p-10 flex'>
                <div className='flex-1'>
                    <img className='w-full h-5/6 object-cover' src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </div>
                <div className='flex-1 py-0 px-12 '>
                    <h1 className='text-2xl font-semibold'>Denim Jumpsuit</h1>
                    <p className='my-4 mx-0 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.</p>
                    <h1 className='text-3xl '>Rs.799</h1>


                    <div className='flex justify-between items-center w-1/3 my-5'>
                        <div className='flex items-center'>
                            <div className="filter flex">
                                <div className="filterTitle m-2">Color</div>
                                <div className="flex items-center gap-2 cursor-pointer">
                                    <div className="filterColor bg-black w-4 h-4 rounded-full"></div>
                                    <div className="filterColor bg-blue-600 w-4 h-4 rounded-full"></div>
                                    <div className="filterColor bg-gray-500 w-4 h-4 rounded-full"></div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <select className='border '>
                                <option disabled selected>Size</option>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex items-center w-1/3 justify-between'>
                        <div className='flex items-center gap-2'>
                            <RemoveIcon className='cursor-pointer' />
                            <div className='font-bold'>1</div>
                            <AddIcon className='cursor-pointer' />
                        </div>
                        <button className='border bg-gray-200'>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product
