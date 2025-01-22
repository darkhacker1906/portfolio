import React from 'react'
import { navbarList } from '../../public/assets/data'
import { useNavigate } from 'react-router';

function Navbar() {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  return (
    <div className='flex justify-between align-start px-5 py-8 bg-slate-200'>
    <div className='text-2xl font-medium'>
    <div>Abhinandan Singh</div>
    <div>Full Stack Developer</div>
    </div>
      <div className='flex gap-10'>
        {navbarList.map((item) => (
          <div className='p-1 cursor-pointer text-2xl' key={item.key} onClick={() => handleClick(item.route)}>{item.name}</div>
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default Navbar