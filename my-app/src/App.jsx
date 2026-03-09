import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </Routes>
    
    </>
  )
}

export default App
