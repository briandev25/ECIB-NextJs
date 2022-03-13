import React from 'react'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='sticky top-0 z-50 shadow-md bg-red-700 overflow-hidden w-full'>
        <Navbar />
    </div>
  )
}

export default Header