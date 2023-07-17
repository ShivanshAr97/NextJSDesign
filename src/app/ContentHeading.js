import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

const ContentHeading = ({ title, number }) => {
    return (
        <div className='flex justify-between w-[100%] my-6 text-gray-500 lg:mt-0 items-center align-middle h-[3.5rem] border-l-blue-500 border-l-4 rounded-[0.3rem] bg-white shadow-sm'>
            <div className='flex items-center align-middle'>
                <h1 className='uppercase font-bold  px-2'>{title}</h1>
                <span className='border rounded-full px-1 my-2 text-xs text-gray-500'>{number}</span>
            </div>
            <div className='flex items-center justify-center mr-2'>
                <span className='mx-2 cursor-pointer'><BsThreeDots /></span>
                <span className=' cursor-pointer'><AiOutlinePlusCircle /></span>
            </div>
        </div>
    )
}

export default ContentHeading