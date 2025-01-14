import React from 'react'
import { useLocation } from 'react-router'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Main from '../components/Main';
function Homepage() {
  let location = useLocation();
  return (
    <div>
    {location.pathname==='/' && <Main/>}
    {location.pathname==='/about'&& <About/>}
    {location.pathname==='/projects' && <Projects/>}
    {location.pathname==='/contact' && <Contact/>}
    </div>
  )
}

export default Homepage