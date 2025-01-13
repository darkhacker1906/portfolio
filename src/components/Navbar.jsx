import React from 'react'
import { navbarList } from '../../public/assets/data'

function Navbar() {
  return (
    <div className="flex gap-3">
    {navbarList.map((item)=>(
        <div key={item.key}>{item.name}</div>
    ))}
        
    </div>
  )
}

export default Navbar