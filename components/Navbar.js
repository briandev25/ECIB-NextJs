import React from 'react'
import { LightningBoltIcon, } from '@heroicons/react/solid'
function Navbar() {
  return (
    <nav className='max-w-7xl mx-auto px-8 sm:px-16  flex items-center whitespace-nowrap text-gray-200'>
        <div className='text-gray-100 flex items-center cursor-pointer flex-grow'>
            <LightningBoltIcon className=' h-6' />
           <h1 className=' font-tangerine text-4xl font-bold py-3 px-2'>Egerton Comrades In Business</h1> 
        </div>
        <div className=' hidden md:flex items-center space-x-4 pr-10'>
          <h3 className='link'>Explore</h3>
          <h3 className='link'>Sign In</h3>
          
        </div>
        <h3 className='button animate-none px-6 py-1 active:scale-95 bg-gray-800 cursor-pointer'>Sell</h3>
        
    </nav>
  )
}

export default Navbar