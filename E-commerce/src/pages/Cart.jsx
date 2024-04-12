import React from 'react'
import Navbar from '../components/Navbar'
import Annoucement from '../components/Annoucement'
import Footer from '../components/Footer'

function Cart() {
  return (
    <div>
    <div className="p-20 sm:p-10">
      <h1 className="font-light text-3xl text-center">YOUR BAG</h1>
      <div className="flex items-center justify-between p-20">
        <button className="p-4 font-semibold cursor-pointer border-2 border-black rounded-full">
          CONTINUE SHOPPING
        </button>
        <div className="hidden sm:flex">
          <span className="underline cursor-pointer mr-5">Shopping Bag(2)</span>
          <span className="underline cursor-pointer">Your Wishlist (0)</span>
        </div>
        <button className="p-4 font-semibold bg-black text-white rounded-full">
          CHECKOUT NOW
        </button>
      </div>
      <div className="flex justify-between flex-col sm:flex-row">
        <div className="flex-3">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex-1">
                <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="Product" className="w-64" />
                <div>
                  <span><b>Product:</b> JESSIE THUNDER SHOES</span>
                  <span><b>ID:</b> 93813718293</span>
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                  <span><b>Size:</b> 37.5</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <button className="p-2 bg-black text-white">+</button>
                  <span className="mx-4">2</span>
                  <button className="p-2 bg-black text-white">-</button>
                </div>
                <div>$ 30</div>
              </div>
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex-1">
                <img src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="Product" className="w-64" />
                <div>
                  <span><b>Product:</b> HAKURA T-SHIRT</span>
                  <span><b>ID:</b> 93813718293</span>
                  <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
                  <span><b>Size:</b> M</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <button className="p-2 bg-black text-white">+</button>
                  <span className="mx-4">1</span>
                  <button className="p-2 bg-black text-white">-</button>
                </div>
                <div>$ 20</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 border-2 border-gray-300 rounded-xl p-8">
          <h1 className="font-light text-xl">ORDER SUMMARY</h1>
          <div className="my-8">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$ 80</span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Shipping</span>
              <span>$ 5.90</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Discount</span>
              <span>$ -5.90</span>
            </div>
            <div className="flex justify-between">
              <span>Total</span>
              <span>$ 80</span>
            </div>
          </div>
          <button className="w-full py-2 bg-black text-white font-semibold rounded-lg">CHECKOUT NOW</button>
        </div>
      </div>
    </div>
  </div>
);
};

export default Cart
