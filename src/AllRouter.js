import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Hero from './Pages/Hero'
import Yogapage from './Pages/Yogapage'
import Contactpage from './Pages/Contactpage'
import Blogpage from './Pages/Blogpage'
import Auth from '../src/Pages/Auth'
import TrackerMain from '../src/Pages/Tracker'
import Ecommerce from './components/e-commerce'
const AllRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Hero/>}/>
            <Route path='/contact' element={<Contactpage/>}/>
            <Route path='/yoga' element={<Yogapage/>}/>
            <Route path='/blogs' element={<Blogpage/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/tracker' element={<TrackerMain/>}/>
            <Route path='/ecommerce' element={<Ecommerce/>}/>
        </Routes>
      
    </div>
  )
}

export default AllRouter
