
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../components/about/About'
import Home from '../components/home/Home'
import Contact from '../components/contact/Contact'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default Router 