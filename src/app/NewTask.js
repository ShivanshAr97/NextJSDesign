import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const NewTask = () => {
    return (
        <div className='flex items-center align-middle my-1 uppercase text-sm font-bold'>
            <span><AiOutlinePlus /></span><span className='mx-2'>new task</span> 
        </div>
    )
}

export default NewTask