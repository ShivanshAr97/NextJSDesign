import React from 'react'
import { BiCalendar, BiSolidDashboard } from 'react-icons/bi';
import { AiOutlineCheckSquare, AiFillCloud, AiOutlineMail, AiOutlineCalendar, AiFillSetting } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import IconsNav from './IconsNav';

const InnerNav = () => {
  return (
    <div className='ml-[15%] flex justify-around align-middle w-[70%]'>
      <div className='flex mr-10'>
        <IconsNav title="Tasks" icon={<BiSolidDashboard size="18px" />} />
        <IconsNav title="Board" icon={ <AiOutlineCheckSquare size="18px" />} />
        <IconsNav title="Gantt" icon={<AiFillCloud size="18px" /> } />
        <IconsNav title="Calendar" icon={ <AiOutlineCalendar size="18px" />} />
        <IconsNav title="Timeline" icon={ <BsPeopleFill size="18px" />} />
        <IconsNav title="Mail" icon={ <AiOutlineMail size="18px" />} />
      </div>
      <div>
      <input className='rounded-2xl text-sm outline-none px-2 py-2 my-4 shadow-sm' type="text" name="" id="" placeholder=' 🔍 Search Tasks' />
      </div>
    </div>
  )
}

export default InnerNav