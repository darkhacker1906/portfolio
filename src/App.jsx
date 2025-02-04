import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <div className='p-5' style={{height: "calc(100vh - 104px)",overflow: "scroll"}}>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App