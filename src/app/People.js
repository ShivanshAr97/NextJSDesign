import Image from 'next/image';
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Icons from './Icons';

const People = () => {
  return (
    <div className='flex flex-col items-center mt-40'>
      <Image className='w-10 h-10 my-1 rounded-full cursor-pointer' src="/usera.png" alt='img' width={100} height={100}></Image>
      <Image className='w-10 h-10 my-1 rounded-full cursor-pointer' src="/userb.png" alt='img' width={100} height={100}></Image>
      <Image className='w-10 h-10 my-1 rounded-full cursor-pointer' src="/userc.png" alt='img' width={100} height={100}></Image>
      <Icons icon={<AiOutlinePlus size="20px" color='blue' />} />
    </div>
  )
}

export default People