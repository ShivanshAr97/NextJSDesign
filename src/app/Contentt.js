import React from 'react'
import Content1 from './Content1'
import Content2 from './Content2'
import Content3 from './Content3'
import Content4 from './Content4'

const Contentt = () => {
  return (
    <div>
      <ul className='grid sm:grid-cols-1 lg:grid-cols-4 gap-4 mx-4 mt-6 lg:mx-4'>
        <Content1 />
        <Content2/>
        <Content3/>
        <Content4/>
      </ul>
    </div>
  )
}

export default Contentt