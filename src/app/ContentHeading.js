import React from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { BsThreeDots } from 'react-icons/bs'

const ContentHeading = ({ title, number }) => {
    return (
        <div className='flex justify-between items-center align-middle rounded-lg py-2 bg-white shadow-sm'>
            <div className='flex items-center align-middle'>
                <h1 className='uppercase border-l-blue-700 border-l-2 font-bold  px-2'>{title}</h1>
                <span className='border rounded-full px-1 my-2 text-xs text-gray-500'>{number}</span>
            </div>
            <div className='flex items-center justify-center mr-2'>
                <span className='mx-2'><BsThreeDots /></span>
                <span><AiOutlinePlusCircle /></span>
            </div>
        </div>
    )
}

export default ContentHeading