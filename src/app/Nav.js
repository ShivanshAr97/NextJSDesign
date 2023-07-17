"use client"
import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { HiBars3 } from 'react-icons/hi2';
import Icons from './Icons';
import { AiOutlineSearch } from 'react-icons/ai';


export default function Home() {
    const [navbar, setNavbar] = useState(false);
    const [nav2, setNav2] = useState(true);

    const nav2Func = () => {
        setNav2(!nav2)
    }
    return (
        <div>
            <nav className="w-full">
                <div className="justify-between -ml-2 mx-auto lg:max-w-7xl md:items-center md:flex border-b md:">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-2 md:block">
                            <div className='flex items-center mx-6'>
                                <div onClick={() => setNavbar(!navbar)}><Icons icon={<HiBars3 color='#D3D3D3' size="18px" />} /></div>
                                <p className=' font-extrabold text-gray-600 text-base lg:ml-6 ml-12'>Constructor</p>
                            </div>
                            <div className="md:hidden mr-4">
                                <button onClick={nav2Func}>
                                    <BiSolidUserCircle size="24px" color='#D3D3D3' />
                                </button>
                            </div>
                            {nav2 ?
                            <div className='hidden'></div>:        
                             (
                            <ul className='border fixed right-3 top-16 bg-white w-40 p-2 z-20'>
                                <li className='border-b font-bold text-sm py-1 mx-2'>Clayton</li>
                                <li className='border-b flex font-bold text-sm py-1 items-center align-middle'><Icons icon={<BsFillBellFill color='#D3D3D3' size="14px" />} />&nbsp; Notification</li>
                                <li className='border-b flex font-bold text-sm py-1 items-center align-middle'><Icons icon={<MdCancel color='#D3D3D3' size="14px" />} />&nbsp;  Signout</li>
                            </ul>

        ) }
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'block' : 'hidden'
                                }`}
                        >
                            <ul className="items-center fixed lg:static w-[100%]  bg-[#f7f8fa] z-20 md:-mx-4 justify-center space-y-8 font-[700] text-gray-400 md:flex md:space-x-6 md:space-y-0 text-sm ">
                                <li className='mx-6 -mt-4 lg:m-0 cursor-pointer'>Dashboard</li>
                                <li className='mx-6 cursor-pointer'>AboutUs</li>
                                <li className='mx-6 cursor-pointer'>News</li>
                                <li className='mx-6 cursor-pointer'>UserPolicy</li>
                                <li className='mx-6 cursor-pointer'>Contacts</li>
                            </ul>

                        </div>

                    </div>
                    <div className='flex -ml-2 lg:-mr-4 w-[48%] text-gray-400 items-center align-middle'>
                        <div className='hidden lg:flex items-center align-middle rounded-[1.5rem] shadow-sm w-[30rem] bg-white px-4'>
                            <AiOutlineSearch size="20px" color="#D3D3D3" />
                            <input className='hidden h-[2.25rem] font-[600] w-[19rem] lg:block text-[0.76rem] px-2 py-1 outline-none' type="text" name="" id="" placeholder=' Search Products, Orders and Clients' />
                        </div>
                        <p className='hidden lg:flex items-center mx-10 cursor-pointer text-gray-400 text-sm'><BiSolidUserCircle size="24px" color='#D3D3D3' /> <span className='mx-2 font-bold'>Clayton</span></p>
                        <div className='hidden lg:flex'>
                            <span className='mx-2'><Icons icon={<BsFillBellFill color='#D3D3D3' size="18px" />} /></span>
                            <Icons icon={<MdCancel color='#D3D3D3' size="18px" />} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center items-center">
            </div>
        </div>
    );
}