import Image from 'next/image'
import React,{useState} from 'react'
import { addToCart,addToLiked } from '../app/actions/productAction'
import {HeartIcon as HeartIconOutline} from '@heroicons/react/outline'
import { StarIcon,HeartIcon as HeartIconSolid} from '@heroicons/react/solid'
import { useDispatch } from 'react-redux'


function Product({title,price,description,category,image,rating}) {
  const product = {title,price,description,category,image,rating}
  const [liked,setLiked] = useState(false);
  const dispatch = useDispatch()


  return (
    <div data-aos='fade-up' className='flex flex-col min-h-[374px] min-w-[321px] bg-white shadow-lg hover:bg-slate-100 px-2 py-1 m-5 cursor-pointer'>
        <div onClick={() =>{
          setLiked(!liked);
          dispatch(addToLiked(product));
          }}>
            {!liked ? <HeartIconOutline className='h-7 cursor-pointer float-right'/> : <HeartIconSolid className='h-7 cursor-pointer text-red-500 float-right' />}
        </div>
        <div className='relative h-[229px] w-[321px]  mx-auto '>
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
        <button className='addToCartButton' onClick={() =>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  )
}

export default Product