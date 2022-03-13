import React from 'react'
import { LightningBoltIcon, } from '@heroicons/react/solid'
import { useSession,signIn,signOut } from 'next-auth/react';
import { GiShoppingCart } from 'react-icons/gi'
import { MdFavorite } from 'react-icons/md'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function Navbar() {
  const { data: session } = useSession();
  const cart = useSelector(state =>state?.cart);
  const router = useRouter();


  return (
    <nav className='max-w-7xl mx-auto px-8 sm:px-16 flex items-center whitespace-nowrap text-gray-200'>
          <div onClick={() =>router.push('/')} className='text-gray-100 flex items-center cursor-pointer flex-grow'>
              <LightningBoltIcon className=' h-6' />
            <h1 className=' font-tangerine text-2xl md:text-4xl font-bold py-3 px-2'>Egerton Comrades In Business</h1> 
          </div>
          <div className=' hidden md:flex items-center space-x-4 pr-10'>
            <h3 className='link'>Explore</h3>
            <h3 className='link' onClick={() =>!session ? signIn() : signOut() }>{session ? `Welcome, ${session.user.name}` : 'Sign In'}</h3>
            <div className='h-10 w-10 flex items-center justify-center cursor-pointer hover:bg-gray-500 p-2 rounded-full' >
              <MdFavorite className=' text-3xl' />
            </div>
            <div onClick={() =>router.push('cart')} className=' relative h-10 w-10 flex items-center justify-center cursor-pointer p-2 rounded-full'>
          <GiShoppingCart className=' text-3xl' />
          {cart && cart.length > 0 ? <div className=' h-4 w-4 rounded-full bg-slate-500 flex items-center justify-center absolute top-0 right-0 p-2 '><span>{cart.length}</span></div>: ''}
          </div>
        </div>
        <h3 className='button animate-none px-6 py-1 active:scale-95 bg-gray-800 cursor-pointer'>Sell</h3>
    </nav>
  )
}

export default Navbar