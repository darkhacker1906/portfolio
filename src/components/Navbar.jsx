import React from 'react'
import { navbarList } from '../../public/assets/data'

function Navbar() {
  return (
    <div className="flex gap-3 bg-black px-5 py-5">
      {navbarList.map((item) => (
        <div className='text-white p-1 cursor-pointer' key={item.key}>{item.name}</div>
      ))}

    </div>
  )
}

export default Navbar