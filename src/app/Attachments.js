import React from 'react'
import { BiSolidDashboard, BiSolidUserCircle } from 'react-icons/bi'
import { BsPeopleFill } from 'react-icons/bs'

const Attachments = () => {
    return (
        <div className='flex justify-between m-2  bg-white'>
            <div className='flex text-gray-500 text-xs cursor-pointer items-center align-middle'>
                <BiSolidDashboard size="18px" />
                <span className='ml-2'>4</span>
            </div>
            <div className='flex text-gray-500 text-xs cursor-pointer items-center align-middle'>
                <BiSolidUserCircle size="18px" />
                <span className='ml-2'>2</span>
            </div>
            <div className='flex text-gray-500 text-xs  cursor-pointeritems-center align-middle'>
                <BsPeopleFill size="18px" />
                <span className='ml-2'>6 days left</span>
            </div>
        </div>
    )
}

export default Attachments