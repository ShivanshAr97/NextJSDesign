import ContentHeading from './ContentHeading'
import Work2 from './Work2';
import NewTask from './NewTask';
import Work from './Work';

const Content4 = () => {

  return (
    <div className='capitalize'>
      <ContentHeading title="done" number={1} />
      <Work2 title="Types of Papers In Catalog" userImg={'/userc.png'} />
      <NewTask/>
    </div>
  )
}

export default Content4