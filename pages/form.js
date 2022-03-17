import React,{useState} from 'react'
import Header from '../components/Header';
import { Cascader } from 'antd'
import 'antd/dist/antd.css';
import Image from 'next/image';
import {db} from '../firebase';
import {useSession} from 'next-auth/react'


function InputForm() {
  const[fName,setFName] = useState('')
  const {data:session} = useSession();

  const sendPost = (e) =>{
    e.preventDefault();

    db.collection('posts').add({
      message:fName,
      name:session.user.name,
      email:session.user.email,
      image:session.user.image,
    })

  }

  return (
    <div >
        <Header />
    <main className='flex w-screen h-[calc(100vh-70px)]'>
        {/* left */}
        <div className='relative w-1/2 '>
            <Image src='/images/form.jpg' layout='fill' objectFit='cover'  />
        </div>
        {/* right */}
        <div className=' w-1/2'>
         <form onSubmit={sendPost}>
            <input value={fName} onChange={e => setFName(e.target.value)} type='text' placeholder='Say something' />
            <button type='submit' hidden>Submit</button>
         </form>
        </div>
    </main>
    </div>
  )
}

export default InputForm