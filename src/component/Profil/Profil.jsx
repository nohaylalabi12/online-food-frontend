import React , { useState } from 'react'
import ProfilNavigation from './ProfilNavigation'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Address from './Address';
import Orders from './Orders';
import Favorites from './Favorites';
import Events from './Events';

const Profil = () => {
    const [openSideBar,setOpenSideBar] = useState(false);
  return (
    <div className="lg:flex justify-between">
    <div className="sticky h-[8vh] lg:w-[20%]">
     <ProfilNavigation open={openSideBar}/>
    </div>
     <div className="lg:w-[80%]">

   <Routes>
    <Route path='/' element={<UserProfile/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/address' element={<Address/>}/>
    <Route path='/favorites' element={<Favorites/>}/>
    <Route path='/events' element={<Events/>}/>
    

    
   </Routes>
     </div>
  
  </div>
  )
}

export default Profil
