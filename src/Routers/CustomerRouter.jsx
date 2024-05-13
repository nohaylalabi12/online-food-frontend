import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/Navbar/Home/Home'
import RestaurantDetails from '../component/Restaurant/RestaurantDetails'
import Cart from '../component/Cart/Cart'
import Profil from '../component/Profil/Profil'

const CustomerRouter = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element = {<Home></Home>}/>
        <Route path='/account/:register' element = {<Home></Home>}/>
        <Route path='/restaurant/:city/:title/:id' element = {<RestaurantDetails/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/my-profile/*' element = {<Profil/>}/>

      </Routes>

    </div>
  )
}

export default CustomerRouter
