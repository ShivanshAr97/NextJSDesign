"use client"
import Link from 'next/link';
import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Icons from './Icons';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className="w-full shadow-md">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-6">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-2 md:block">
                            <div className='flex items-center'>
                                <Icons icon={<BsThreeDots color='blue' size="20px" />} />
                                <p className='font-bold text-base mx-2'>Constructor</p>
                            </div>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black outline-none"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-black outline-none"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 font-medium md:flex md:space-x-6 md:space-y-0 text-xs">
                                <li className=' -mt-4 lg:mt-0 cursor-pointer'>Dashboard</li>
                                <li className='mx-6 cursor-pointer'>About Us</li>
                                <li className='mx-6 cursor-pointer'>News</li>
                                <li className='mx-6 cursor-pointer'>User Policy</li>
                                <li className='mx-6 cursor-pointer'>Contacts</li>
                            </ul>

                        </div>

                    </div>
                    <div className='flex -ml-2 lg:-mr-4 w-[48%] items-center align-middle'>
                    <span className='lg:hidden'><Icons icon={<AiOutlineSearch/>} size="20px" color="gray"/></span>
                    <input className='hidden w-[50%] h-10 lg:block text-xs rounded-2xl px-2 py-1 shadow-sm outline-none' type="text" name="" id="" placeholder=' 🔍 Search Products, Orders and Clients' />
                    <p className='flex items-center mx-10 cursor-pointer text-sm'><BiSolidUserCircle size="20px" color='gray' /> <span className='mx-2 font-bold'>Clayton</span></p>
                    <div className='flex'>
                        <span className='mx-2'><Icons icon={<BsFillBellFill color='gray' size="18px" />} /></span>
                        <Icons icon={<MdCancel color='gray' size="18px" />} />
                    </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center">
            </div>
        </div>
    );
}