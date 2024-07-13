import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-cyan-700 text-white gap-5 py-2 '>
    <div className="logo">
        <span className='font-bold text-2xl text-green-200 mx-9'><i>Todo</i></span>
    </div>
      <ul className='flex gap-3 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>About</li>
      </ul>
    </nav>  
  )
}

export default Navbar
