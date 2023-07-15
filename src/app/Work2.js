import React from 'react'
import Image from 'next/image'

const Work2 = ({img,title,userImg}) => {
    return (
        <div className='mt-4 border p-1 rounded-lg bg-white w-[100%]'>
            <div className='flex items-center justify-between align-middle my-1'>
                <span className='text-xs text-gray-500'>Space task 2</span>
                <Image className='rounded-full' width={20} height={20} src={userImg} />
            </div>
            <h1 className='text-[0.8rem] font-bold'>{title}</h1>
        </div>
    )
}

export default Work2