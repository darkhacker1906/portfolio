import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App