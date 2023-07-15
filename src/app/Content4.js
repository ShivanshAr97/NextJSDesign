import React from 'react'
import ContentHeading from './ContentHeading'
import Work2 from './Work2';
import NewTask from './NewTask';

const Content4 = () => {
  return (
    <div className=''>
      <ContentHeading  title="done" number={4} />
      <Work2 title="Types of Papers In Catalog" userImg={'/userc.png'} />
      <NewTask/>
    </div>
  )
}

export default Content4