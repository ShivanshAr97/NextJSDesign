import React from 'react'
import ContentHeading from './ContentHeading'
import Work from './Work';
import Work2 from './Work2';

const Content2 = () => {
  return (
    <div className='capitalize'>
      <ContentHeading title="in work" number="3" />
      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      <Work2
        title="Make money online through"
        userImg={'/usera.png'}
      />
      <Work title="Make money online through" userImg={'/userc.png'} img={"/userf.jpeg"} />
      <Work2 title="Search Engine Optimisation" userImg={'/usera.png'} />
    </div>
  )
}

export default Content2