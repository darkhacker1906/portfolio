import React from 'react'
import { useLocation } from 'react-router'
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Main from '../components/Main';
function Homepage() {
  let location = useLocation();
  console.log(location,'==========');
  return (
    <>
    {location.pathname==='/' && <Main/>}
    {location==='/about'&& <About/>}
    {location==='/projects' && <Projects/>}
    {location==='/contact' && <Contact/>}
    </>
  )
}

export default Homepage