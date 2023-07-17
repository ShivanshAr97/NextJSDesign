import SideNav from './SideNav'
import Nav from './Nav'
import User from './User'
import InnerNav from './InnerNav'
import Contentt from './Contentt'
import Modal from './Modal'

export default function Home() {
  return (
    <div div className='lg:w-[110%]'>
      <Nav />
      <div className='flex flex-col lg:flex-row'>
        <SideNav />
        <User />
        <div className='flex flex-col border rounded-[2rem] px-4 mx-2 my-4'>
          <InnerNav />
          <Contentt />
          <Modal />
        </div>
      </div>
    </div>
  )
}
