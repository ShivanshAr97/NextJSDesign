import React from 'react'
import Content1 from './Content1'
import ContentHeading from './ContentHeading'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'

const Contentt = () => {
  return (
    <div>
      <ul className='grid sm:grid-cols-1  lg:grid-cols-4 gap-4 mx-4 lg:mx-10'>
        <Content1 />
        <Content2/>
        <Content3/>
        <Content4/>
      </ul>
    </div>
  )
}

export default Contentt