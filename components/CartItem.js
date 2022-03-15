import React,{ useState} from 'react'
import Image from 'next/image'
import {HeartIcon as HeartIconOutline} from '@heroicons/react/outline';
import {HeartIcon as HeartIconSolid} from '@heroicons/react/solid';
import {useDispatch} from 'react-redux'
import {removeFromCart} from '../app/actions/productAction'

function CartItem({image,title,description,price}) {
const [liked,setLiked] = useState(false);
const dispatch = useDispatch();


  return (
    <div className='flex hover:bg-white py-3 border-b bg-slate-50 group cursor-pointer'>
        {/* image */}
        <div className='relative h-24 w-40 md:h-[200px] md:w-[300px] group-hover:scale-90 transition transform duration-200 ease-out' >
            <Image src={image} alt='' layout='fill' objectFit='cover' className=' rounded-2xl' />
        </div>
        {/* item info */}
        <div className='flex flex-col flex-grow flex-1 p-4'>
           <div className='flex justify-between whitespace-nowrap'>
              <h3 className=' text-lg text-black font-semibold'>{title}</h3>
              {liked ? <HeartIconSolid onClick={() => setLiked(false)} className=' hidden md:inline-block h-7 text-red-600 cursor-pointer' /> : <HeartIconOutline onClick={() => setLiked(true)} className='hidden md:inline-block h-7 cursor-pointer text-black' />}
           </div>
           <p className=' text-xs pt-3 pr-10 text-gray-500 line-clamp-2'>{description}</p>
           <div className='flex flex-col md:flex-row justify-between mt-5 md:my-auto'>
               <h2 className=' text-center text-xl md:text-2xl font-semibold'>${price}</h2>
               <button onClick={() =>dispatch(removeFromCart(image))} className='removeFromCartButton '>Remove from basket</button>
           </div>
        </div>
    </div>
  )
}

export default CartItem