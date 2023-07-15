import React from 'react'
import { BsFillBellFill } from 'react-icons/bs';
import { BiSolidUserCircle } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';
import Icons from './Icons';

const Nav = () => {
    return (
        <div className='flex items-center text-xs border-b shadow-md justify-around py-2 '>
            <div className='flex items-center'>
                <Icons icon={<BsThreeDots color='blue' size="20px"/>}/>
                <p className='font-bold text-base mx-2'>Constructor</p>
            </div>
            <ul className='hidden lg:flex lg:font-medium'>
                <li className='mx-4 cursor-pointer'>Dashboard</li>
                <li className='mx-4 cursor-pointer'>About Us</li>
                <li className='mx-4 cursor-pointer'>News</li>
                <li className='mx-4 cursor-pointer'>User Policy</li>
                <li className='mx-4 cursor-pointer'>Contacts</li>
            </ul>
            <input className='hidden lg:block rounded-2xl px-2 py-2.5 w-[22%] shadow-sm outline-none' type="text" name="" id="" placeholder=' 🔍 Search Products, Orders and Clients' />
            <p className='flex items-center cursor-pointer'><BiSolidUserCircle size="20px" color='gray'/> <span className='mx-2 font-bold'>Clayton</span></p>
            <div className='lg:flex hidden'>
                 <span className='mx-2'><Icons icon={<BsFillBellFill color='gray' size="18px"/>}/></span>
                <Icons icon={<MdCancel color='gray' size="18px"/>}/>
            </div>
        </div>
    )
}

export default Nav