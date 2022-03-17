import React from 'react'
import CurrencyFormat from 'react-currency-format';
import {getTotal} from '../app/reducers/productsReducer';
import { useSelector} from 'react-redux'
import {useSession,signIn} from 'next-auth/react'
import { useRouter } from 'next/router'

function Subtotal() {
const router = useRouter();
const { data: session } = useSession(); 
const cart = useSelector(state => state?.cart);

  return (
    <div className='flex flex-col'>
        <CurrencyFormat
        renderText={value =><div>
            <div className='flex justify-between'><p className=' font-semibold'>Subtotal({cart?.length} items): </p> <span className=' font-semibold'>{value}</span></div>
            <div className='flex justify-between'><p className=' font-semibold'>Grand total: </p> <span className=' font-semibold'>{value}</span></div>
        </div>}
        decimalScale={2}
        prefix="$"
        thousandSeparator={true}
        displayType={'text'}
        value={getTotal(cart)}
         />
     <button onClick={() =>{
         if(session){
           router.push('checkout')  
         }else{
           signIn()
         }
     }} className='removeFromCartButton rounded-md mt-10'>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal