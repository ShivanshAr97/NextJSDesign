import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const NewTask = () => {

  return (
    <>
      <div className='flex w-full justify-center py-1 items-center align-middle my-1 capitalizr text-gray-500 text-sm font-bold'>
        <span><AiOutlinePlus /></span>
        <span className='mx-2 cursor-pointer'>
          new task
        </span>
      </div>
    </>
  );
};

export default NewTask;
