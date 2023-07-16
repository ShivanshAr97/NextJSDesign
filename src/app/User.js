import React from 'react'
import { BiSolidUserCircle, BiSolidDashboard } from 'react-icons/bi';
import { AiOutlineCheckSquare, AiFillCloud, AiOutlineMail, AiOutlineCalendar, AiFillSetting } from 'react-icons/ai';
import { BsThreeDots, BsPeopleFill } from 'react-icons/bs';
import Icons from './Icons';
import Image from 'next/image';
import UserIcons from './UserIcons';

const User = () => {
    return (
        <div className='hidden lg:block h-[100%] w-[23%] border-gray-300 shadow-lg '>
            <div className=' flex justify-between m-2'>
                <Icons icon={<BiSolidUserCircle color='gray' size="20px" />} />
                <Icons icon={<BsThreeDots color='gray' size="20px" />} />
            </div>
            <div className='flex flex-col mt-2 justify-center'>
                <Image  className='mx-auto border-1 relative  p-3 border-gray-200 w-32 h-32 my-1 rounded-full object-cover' src="/userd.jpeg" alt='img' width={100} height={100}></Image>
                <div className='rounded-bl-full absolute rounded-br-full rounded-tl-full border-b-4 mx-[4.2rem] -mt-[4.4rem] border-l-4 border-blue-300 p-16'></div>
                <h1 className=' mx-auto font-bold my-4'>Hello Alfred Bryant</h1>
                <p className='mx-auto -mt-2 text-sm'>adrain.haden@yahoo.com</p>
            </div>
            <div className='grid grid-cols-2 m-4 mx-8'>
                <UserIcons title="Dashboard" icon={<BiSolidDashboard size="20px" />}/>
                <UserIcons title="Notes" icon={<AiOutlineCheckSquare size="20px" />}/>
                <UserIcons title="Tasks" icon={<AiOutlineCheckSquare size="20px" />}/>
                <UserIcons title="Files" icon={<AiFillCloud size="20px" />}/>
                <UserIcons title="Emails" icon={<AiOutlineMail size="20px" />}/>
                <UserIcons title="Clients" icon={<BsPeopleFill size="20px" />}/>
                <UserIcons title="Calendars" icon={<AiOutlineCalendar size="20px" />}/>
                <UserIcons title="Settings" icon={<AiFillSetting size="20px" />}/>
            </div>

        </div>
    )
}

export default User