import React from 'react'
import { useLocation } from 'react-router'
import avatar from '../../public/assets/images/avatar.jpg'
function Homepage() {
  let location = useLocation();
  return (
    <div className='flex'>
      <div className='img-div' style={{ width: "35%" }}>
        <img src={avatar} alt='' />
      </div>
      <div style={{ width: "65%" }}>
        <div className='text-8xl'>
          MY PORTFOLIO
        </div>
      </div>
    </div>
  )
}

export default Homepage