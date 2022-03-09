import Image from 'next/image'
import React from 'react'
import { StarIcon} from '@heroicons/react/solid'

function Product({title,price,description,category,image,rating}) {
  return (
    <div className='flex flex-col min-h-[374px] min-w-[321px] bg-white shadow-lg px-2 py-1 m-5 cursor-pointer'>
        <div className='relative h-[229px] w-[321px] border-b '>
            <Image src={image} layout='fill'  objectFit='contain' className=' hover:scale-110 transition duration-300 ease-out' />
        </div>
        <div className='flex items-center justify-center px-3'>
        <p className='text-sm font-semibold py-2'>{category}</p>
        
        </div>
        <div className=' flex items-center'>
          <p className=' text-sm line-clamp-2'>{title}</p>
          
        </div>
        <div className=' flex items-center justify-between py-2 my-3'>
          <div className='flex'>
          {Array(parseInt(rating.rate)).fill().map((_,i) =>(
              <StarIcon className='h-5 text-yellow-500' />
          ))}
          </div>
          <p className=' text-base text-gray-600 mr-4'>{`$${price}`}</p>
        </div>
        <button className='addToCartButton'>Add to Cart</button>
    </div>
  )
}

export default Product