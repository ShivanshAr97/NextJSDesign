import React from 'react'

const UserIcons = ({title, icon}) => {
    return (
        <div className='font-medium cursor-pointer flex hover:shadow-md flex-col text-gray-500 border-2 rounded-lg h-24 hover:bg-white transition duration-300 hover:text-blue-500 hover:scale-110 m-1 items-center align-middle justify-center'>
            <p className='mx-auto mb-1 hover:text-blue-500'>{icon}</p>
            <p className='text-sm flex justify-center'>{title}</p>
        </div>
    )
}

export default UserIcons