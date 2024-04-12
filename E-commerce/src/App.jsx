import { useState } from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Annoucement from './components/Annoucement'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Navbar/>
    <Annoucement/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default App
