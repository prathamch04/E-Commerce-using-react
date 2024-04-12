import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
      <Navbar />
      <Annoucement/>
      <div>
        <h1>YOUR BAG</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
