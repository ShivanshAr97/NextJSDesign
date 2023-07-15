import React from 'react'
import ContentHeading from './ContentHeading';
import Work from './Work';
import Work2 from './Work2';
import NewTask from './NewTask';
const Content1 = () => {
  return (
    <div className=''>
      <ContentHeading title="to do" number={5}/>
      <Work title="Make money online through" userImg={'/usera.png'} img={"/usere.jpeg"}/>
      <Work2 title="Make money online through" userImg={'/userb.png'} />
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'}/>
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'}/>
      <NewTask/>
    </div>
  )
}

export default Content1