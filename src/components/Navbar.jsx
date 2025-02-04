import React from 'react'
import { navbarList } from '../../public/assets/data'
import { Link, useNavigate } from 'react-router';
import { useLocation } from 'react-router'

function Navbar() {
  const navigate = useNavigate();
  let location = useLocation();
  function handleClick(route) {
    navigate(route);
  }
  console.log(location.pathname,'==========');
  return (
    <div className='flex justify-between align-start px-8 py-[20px] bg-[#2D2D2D] text-[#c5c4c4] h-[104px]'>
    <div className='text-2xl font-medium'>
    <div className="text-white">Abhinandan Singh</div>
    <div className="text-white">Frontend Developer</div>
    </div>
      <div className='flex gap-10 items-center'>
        {navbarList.map((item) => (
          <div className={`p-1 cursor-pointer text-[20px] hover:text-white ${item.route===location.pathname && 'text-[#fff]'}`}  key={item.key} onClick={() => handleClick(item.route)}>{item.name}</div>
        ))}
      </div>
      <div className='flex gap-3 items-center'>
      <Link to="https://www.linkedin.com/in/abhinandan-singh-8bb1861b4/" style={{color:"white"}}><i className="fa-brands fa-linkedin"></i></Link>
      <Link to="https://github.com/darkhacker1906" style={{color:"white"}}><i className="fa-brands fa-github"></i></Link>
      </div>
    </div>
  )
}

export default Navbar