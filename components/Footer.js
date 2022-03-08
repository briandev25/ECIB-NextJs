import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'
function Footer() {
  return (
    <div className=' min-h-[300px] bg-gray-300 px-20 py-10'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4'>
        <div className=' mb-4'>
            <h1 className='footerHeader'>About Us</h1>
            <p className='footerLink'>About ECIB</p>
            <p className='footerLink'>Terms and Conditions</p>
            <p className='footerLink'>Privacy Policy</p>
            <p className='footerLink'>Billing Policy</p>
        </div>
        <div className=' mb-4'>
            <h1 className='footerHeader'>Support</h1>
            <p className='footerLink'>kiprop@gmail.com</p>
            <p className='footerLink'>Safety Tips</p>
            <p className='footerLink'>Contact Us</p>
            <p className='footerLink'>FAQ</p>
        </div>
        <div className=' mb-4'>
            <h1 className='footerHeader'>Resources</h1>
            <p className='footerLink'>Our FB Page</p>
            <p className='footerLink'>Our Instagram</p>
            <p className='footerLink'>Our Youtube</p>
            <p className='footerLink'>Our Twitter</p>
        </div>
        <div className=' mb-4'>
            <h1 className='footerHeader'>Hot Links</h1>
            <p className='footerLink'>Brand</p>
            <p className='footerLink'>ECIB sellers</p>
            <p className='footerLink'>Locations</p>
            <p className='footerLink'>ECIB Egerton</p>
        </div>
    </div>
     <div className=' flex flex-col md:flex-row  items-center justify-between mt-10 border-t border-gray-400 pt-2 px-10'>
       <p>@Copyright 2022 ECIB</p>
       <div className='flex mt-4 space-x-3 '>
        <a href='https://web.facebook.com/profile.php?id=100010603156332' target='_blank'><FaFacebookF className='cursor-pointer' /></a>
        <a href='https://www.linkedin.com/in/bryan-kiprop-744254173/'target='_blank' ><BsLinkedin className='cursor-pointer' /></a>
        <a href='https://twitter.com/briankips254' target='_blank' ><AiOutlineTwitter className='cursor-pointer' /></a>
        <a href='https://github.com/briandev25' target='_blank'><BsGithub className='cursor-pointer' /></a>
       </div>
    </div>   
    </div>
  )
}

export default Footer