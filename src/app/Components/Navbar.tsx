import React from 'react'

const Navbar = () => {
  return (
    <div className='text-white'>
      <div className='max-w-full'>  
      <ul className='flex flex-row  justify-between align-middle'>
        <label className='font-extrabold text-4xl tracking-widest'> Clarity </label>
        <div className='flex flex-row  justify-center gap-6 align-middle mr-8 p-3'>
        <li><a href="/showCalendar"> Calendar </a></li>
        <li>  <a href="/register/"> Sign In  </a></li>
        </div>
      </ul>
      <hr className='border-[rgb(91,91,91)] ' />
      </div>
    </div>
  )
}

export default Navbar
