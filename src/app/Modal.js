"use client"
import React, { useState } from 'react'
import { AiFillPlayCircle, AiOutlineClose, AiOutlineEnter } from 'react-icons/ai'
import { BiCloud, BiComment, BiFlag } from 'react-icons/bi'

const Modal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    function closeModal() {
        setModalVisible(false);
    }
    return (
        <div className={`modal ${modalVisible ? 'visible' : 'hidden'}`}>
            <div className='fixed lg:bottom-4 lg:right-4 flex flex-col text-sm border rounded-lg p-4 bg-white z-10 shadow-md'>
                <div className='flex justify-between items-center align-middle'>
                    <h1 className='font-bold my-2 mx-4'>Development Apps</h1>
                    <button onClick={closeModal}><AiOutlineClose /></button>
                </div>
                <ul className='grid grid-cols-2 mx-6'>
                    <li className='my-1 flex items-center align-middle font-semibold'><AiOutlineEnter color='gray' size="20px" /><span className='mx-4'>7 comments</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiFlag color='gray' size="20px" /><span className='mx-4'>Priority enabled</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiCloud color='gray' size="20px" /><span className='mx-4'>3 files</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiComment color='gray' size="20px" /><span className='mx-4'>7 comments</span> </li>
                    <li className='my-1 flex items-center align-middle font-semibold'><BiComment color='gray' /><span className='mx-2'>Tyler Norman</span> </li>
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