import React from 'react'
import ContentHeading from './ContentHeading'
import Work2 from './Work2';
import { AiFillFlag, AiOutlineClose } from 'react-icons/ai';
import { MdOutlineAttachment } from 'react-icons/md'
import Image from 'next/image';
import { BsClock } from 'react-icons/bs';

const Content3 = () => {
  return (
    <div className='capitalize'>
      <ContentHeading title="review" number={4} />

      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'} />
      <div className='mt-4 shadow-sm p-1 rounded-lg text-gray-500  bg-white w-[100%]'>

        <div className='flex mt-4 text-gray-400 text-sm items-center align-middle'>
          <span className='mx-4'><AiOutlineClose size="20px"/></span>
          <input className='w-24 mx-2' type="text" placeholder='Task name' name="" id="" />
          <Image className='rounded-full mx-2' width={20} height={20} src='/usera.png' />
        </div>
        <div className='flex text-gray-400 text-xs justify-around my-4 align-middle'>
          <div className='flex justify-center items-center align-middle'>
          <span className='m-2'><AiFillFlag size="20px"  /></span>
          <span className='m-2'><MdOutlineAttachment size="20px"  /></span>
          <span className='m-2'><BsClock size="16px"  /></span>
          </div>
          <button className='font-bold bg-blue-500 text-white px-3 py-0.5 rounded-lg'>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Content3