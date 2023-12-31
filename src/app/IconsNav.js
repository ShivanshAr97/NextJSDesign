import React from 'react'

const IconsNav = ({title, icon}) => {
    return (
        <div className='font-bold mx-4 cursor-pointer  flex hover:border-b-blue-500 text-gray-400 py-2 my-2 hover:border-b-2 duration-150 hover:text-blue-500 items-center align-middle justify-center'>
            <p className=' mr-2'>{icon}</p>
            <p className=' text-xs flex justify-center'>{title}</p>
        </div>
    )
}

export default IconsNav