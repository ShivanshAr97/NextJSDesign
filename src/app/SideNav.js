import React from 'react'
import { BsMessenger, BsGlobeAmericas, BsCompassFill, BsFillCompassFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { IoCompass } from 'react-icons/io5';
import { BiTrendingUp, BiBuildingHouse } from 'react-icons/bi';
import People from './People';
import Icons from './Icons';

const SideNav = () => {
  return (
    <div className='hidden lg:h-[124vh] lg:w-[5%] lg:flex lg:flex-col border-r-2'>
        <div className='flex mx-auto flex-col mt-4'>
        <Icons icon={<IoCompass size="26px" color='blue'/>}/>
        <Icons icon={<AiFillStar size="20px" color='#D3D3D3'/>}/>
        <Icons icon={<BsMessenger size="20px" color='#D3D3D3'/>}/>
        <Icons icon={<BiTrendingUp size="20px" color='#D3D3D3'/>}/>
        <Icons icon={<BsGlobeAmericas size="20px" color='#D3D3D3'/>}/>
        <Icons icon={<BiBuildingHouse size="20px" color='#D3D3D3'/>}/>
        <People/>
        </div>
    </div>
  )
}

export default SideNav