"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { AiFillPlayCircle, AiOutlineClose, AiOutlineEnter } from 'react-icons/ai'
import { BiCloud, BiComment, BiFlag } from 'react-icons/bi'
import { LuLink2 } from 'react-icons/lu'

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    function closeModal() {
        setModalVisible(false);
    }
    return (
        <div className={`modal ${modalVisible ? 'visible' : 'hidden'}`}>
            <div className='fixed lg:bottom-4 lg:right-4 flex flex-col text-sm border rounded-lg p-4 bg-white z-10 shadow-md'>
                <div className='flex justify-between items-center align-middle'>
                    <div className='flex items-center align-middle'>
                        <div className='bg-blue-500 rounded-full p-1'></div>
                        <h1 className='font-bold my-2 mx-4'>Development Apps</h1>
                        <LuLink2 />
                    </div>
                    <button onClick={closeModal}><AiOutlineClose /></button>
                </div>
                <ul className='grid grid-cols-2 mx-6 text-gray-600'>
                    <li className='my-1 flex items-center align-middle font-semibold'><AiOutlineEnter color='#D3D3D3' size="20px" /><span className='mx-4'>7 comments</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiFlag color='#D3D3D3' size="20px" /><span className='mx-4'>Priority enabled</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiCloud color='#D3D3D3' size="20px" /><span className='mx-4'>3 files</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiComment color='#D3D3D3' size="20px" /><span className='mx-4'>7 comments</span> </li>
                    <div className='flex my-1 items-center align-middle'>
                    <Image src="/usera.png" height={24} width={24} alt ="img" className="rounded-full"/>
                    <span className='mx-3 font-semibold'>Tyler Norman</span>
                    </div>
                </ul>
                <div className='mt-4 border-t-2 pt-2 flex'>
                    <div className='mx-6'>
                        <span className='uppercase font-semibold text-red-500'>start date</span>
                        <p className='text-xs font-bold'>Sep 3, 9:00pm</p>
                    </div>
                    <div className='mx-6'>
                        <span className='uppercase font-semibold text-red-500'>due date</span>
                        <p className='text-xs font-bold'>Sep 4, 9:00pm</p>
                    </div>
                    <div className='flex items-center align-middle'>
                        <AiFillPlayCircle color='red' size="20px" /><span className='mx-1'>0:00</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal