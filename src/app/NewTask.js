"use client"
import React, { useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

const NewTask = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
      };
      addTodo(newTodo);
      setInputValue(''); // Reset the input value after adding the task
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input
        className='w-full my-2 outline-none border px-2'
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className='flex w-full bg-blue-500 text-white justify-center py-1 items-center align-middle my-1 uppercase text-sm font-bold'>
        <span><AiOutlinePlusCircle /></span>
        <span className='mx-2 cursor-pointer' onClick={handleAddTodo}>
          new task
        </span>
      </div>
    </>
  );
};

export default NewTask;
