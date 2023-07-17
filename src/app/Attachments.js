import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai'
import { BsAlarm } from 'react-icons/bs'
import { MdOutlineAttachment } from 'react-icons/md'

const Attachments = () => {
    return (
        <div className='flex justify-between m-2 px-2 pt-2 pb-4 text-gray-500  bg-white'>
            <div className='flex text-gray-400 text-xs cursor-pointer items-center align-middle'>
                <AiOutlineMenuFold size="18px" />
                <span className='ml-2 font-bold  text-[0.65rem] text-gray-500'>4</span>
            </div>
            <div className='flex text-gray-400 text-xs cursor-pointer items-center align-middle'>
                <MdOutlineAttachment size="18px" />
                <span className='ml-2 font-bold  text-[0.65rem] text-gray-500'>2</span>
            </div>
            <div className='flex text-gray-400 text-xs  cursor-pointeritems-center align-middle'>
                <BsAlarm size="18px" />
                <span className='ml-2 font-bold text-[0.65rem] text-gray-500'>6 days left</span>
            </div>
        </div>
    )
}

export default Attachments