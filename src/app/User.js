import React from 'react'
import { BiSolidUserCircle, BiSolidDashboard } from 'react-icons/bi';
import { AiOutlineCheckSquare, AiFillCloud, AiOutlineMail, AiOutlineCalendar, AiFillSetting } from 'react-icons/ai';
import { BsThreeDots, BsPeopleFill } from 'react-icons/bs';
import Icons from './Icons';
import Image from 'next/image';
import UserIcons from './UserIcons';
import Contant from './Contant';

const User = () => {
    return (
        <div className='lg:block h-[100%] lg:w-[25%] border-gray-300 text-[#7e7e7e]'>
            <div className=' flex justify-between mx-12 mt-4'>
                <Icons icon={<BiSolidUserCircle color='#D3D3D3' size="20px" />} />
                <Icons icon={<BsThreeDots color='#D3D3D3' size="20px" />} />
            </div>
            <div className='flex flex-col mt-2 justify-center'>
                <Image  className='mx-auto border-1 relative  p-3 border-gray-200 w-32 h-32 my-1 rounded-full object-cover' src="/userd.jpeg" alt='img' width={100} height={100}></Image>
                <h1 className=' mx-auto font-bold my-4'>Hello Alfred Bryant</h1>
                <p className='mx-auto -mt-2 text-sm font-bold'>adrain.haden@yahoo.com</p>
            </div>
            <div className='grid grid-cols-2 border rounded-3xl my-4 mx-[3.5rem] text-[#d3d3d3]'>
                <span className='border-r'><UserIcons title="Dashboard" icon={<BiSolidDashboard size="20px" />}/></span>
                <UserIcons title="Notes" icon={<AiOutlineCheckSquare size="20px"  color='blue'/>}/>
                <span className='border'><UserIcons title="Tasks" icon={<AiOutlineCheckSquare size="20px" />}/></span>
                <span className='border-y'><UserIcons title="Files" icon={<AiFillCloud size="20px" />}/></span>
                <span className='border'><UserIcons title="Emails" icon={<AiOutlineMail size="20px" />}/></span>
                <UserIcons title="Clients" icon={<BsPeopleFill size="20px" />}/>
            </div>
            <Contant/>
        </div>
    )
}

export default User