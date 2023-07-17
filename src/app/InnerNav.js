import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiLeftArrow, BiRightArrow, BiSolidDashboard, BiTrendingUp } from 'react-icons/bi';
import { HiBars3, HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';

import IconsNav from './IconsNav';
import Icons from './Icons';

const InnerNav = () => {
  return (
    <div className='ml-[10%] flex justify-around align-middle items-center w-[70%] border-b'>
      <div className='flex items-center align-middle mr-10'>
        <span className='lg:hidden ml-12 mr-8'><Icons icon={<BiLeftArrow size="18px" />} /></span>

        <span className=''><IconsNav title="Tasks" icon={<FaTasks size="18px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Board" icon={<BiSolidDashboard size="22px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Calendar" icon={<AiOutlineCalendar size="22px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Gantt" icon={<HiOutlineBars3CenterLeft size="22px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Timeline" icon={<HiBars3 size="22px" />} /></span>
        <span className='hidden lg:block'><IconsNav title="Mail" icon={<BiTrendingUp size="22px" />} /></span>

        <span className='lg:hidden mx-[2rem]'><Icons icon={<BiRightArrow size="18px" />} /></span>
        <span className='lg:hidden -mx-6'><Icons icon={<AiOutlineSearch />} size="20px" color="gray" /></span>
      </div>
      <div>
        <div className='hidden lg:flex border items-center align-middle rounded-[1.5rem] shadow-sm w-[12rem] px-4 bg-white'>
          <span className=''><AiOutlineSearch size="20px" color='#d3d3d3' /></span>
          <input className=' h-[2.25rem] w-[7rem] font-[600] text-[0.76rem] px-2 py-1 outline-none' type="text" name="" id="" placeholder=' Search Tasks' />
        </div>
      </div>
    </div>
  )
}

export default InnerNav