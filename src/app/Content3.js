import React from 'react'
import ContentHeading from './ContentHeading'
import Work2 from './Work2';

const Content3 = () => {
  return (
    <div className=''>
      <ContentHeading title="review" number={3}/>
      
      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      <Work2 title="Search Engine Optimisation" userImg={'/usera.png'}/>
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'}/>
    </div>
  )
}

export default Content3