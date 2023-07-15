import Image from 'next/image'
import React from 'react'
import Attachments from './Attachments'

const Work = ({img,title,userImg}) => {
    return (
        <>
            <div className='mt-4 border p-1 rounded-lg w-[36%] lg:w-[100%] bg-white'>
                <img className='h-24 w-52 object-cover rounded-lg mx-auto' src={img} alt="" />
                <div className='flex items-center justify-between align-middle my-1'>
                    <span className='text-xs text-gray-500'>Space task 2</span>
                    <Image className='rounded-full' width={20} height={20} src={userImg} />
                </div>
                <h1 className='text-[0.8rem] font-bold'>{title}</h1>
                <Attachments/>
            </div>
        </>
    )
}

export default Work