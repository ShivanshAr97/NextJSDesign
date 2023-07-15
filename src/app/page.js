import Image from 'next/image'
import SideNav from './SideNav'
import Nav from './Nav'
import User from './User'
import InnerNav from './InnerNav'
import Content1 from './Content1'
import Contentt from './Contentt'
import Modal from './Modal'

export default function Home() {
  return (
    <>
    <Nav/>
    <div className='flex'>
    <SideNav/>
    <User/>
    <div className='flex flex-col'>
    <InnerNav/>
    <Contentt/>
    <Modal/>
    </div>
    </div>
    </>
  )
}
