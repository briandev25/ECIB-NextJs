import Image from 'next/image'
import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/solid'

function Hero() {
  return (
    <div className=' max-w-screen-2xl mx-auto relative h-[300px] md:h-[400px] lg:h-[500px] xl:h-[620px]'>
       <Image src='/background-images/shoe.jpg' layout='fill' objectFit='cover' /> 
       <div className=' hidden lg:block absolute top-1/4 left-0 w-[400px] ml-10'>
           <h2 className=' text-white lg:text-4xl xl:text-5xl font-semibold'>Planning to start life outside campus?</h2>
           <h3 className=' text-gray-200 py-7 text-xl font-bold'>Perfect,This Platform will inspire you</h3>
           <button className='button'>
               Discover now <ArrowRightIcon className=' h-5 mt-1 ml-2' />
           </button>
       </div>
    </div>
  )
}

export default Hero