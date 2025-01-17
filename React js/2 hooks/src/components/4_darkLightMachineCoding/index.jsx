import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Blog from './pages/Blog'
import Navbar from './components/navbar'
import { ThemeProvider } from './context/themeContext'
// import {BrowserRouter, }

const DarkLightMachineCoding = () => {
    
  return (
    <ThemeProvider>
    <BrowserRouter>
    {/* /navbar */}
    {/* {routes} */}
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/blog' element={<Blog/>} ></Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default DarkLightMachineCoding