import React from 'react';
import Image from 'next/image';
import Attachments from './Attachments';

const Work = ({ img, title, userImg, number }) => {
  return (
    <>
      <div className='mt-4 shadow-sm rounded-lg w-[100%] text-gray-500 bg-white'>
        <img className='h-32 w-60 object-cover rounded-t-lg mx-auto' src={img} alt='' />
        <div className='flex items-center justify-between align-middle mx-4 my-2'>
          <span className='text-[0.65rem] text-gray-400 font-bold'>Space task 3</span>
          <Image className='rounded-full' width={20} height={20} src={userImg} />
        </div>
        <h1 className='text-[0.8rem] mt-4 mx-4 font-bold'>{title}</h1>
        <Attachments />
      </div>
    </>
  );
};

export default Work;
