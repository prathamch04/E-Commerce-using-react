import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import ProductList from './pages/ProductList.jsx'
import Cart from './pages/Cart.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element = {<Home />} />
      <Route path='register' element = {<Register />} />
      <Route path='signin' element = {<Login/>} />
      <Route path='productlist' element = {<ProductList/>} />
      <Route path='cart' element = {<Cart/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
