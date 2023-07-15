"use client"
import React, {useEffect, useState} from 'react'
import ContentHeading from './ContentHeading'
import Work2 from './Work2';
import NewTask from './NewTask';

const Content3 = () => {
  const [todos3, setTodos3] = useState([]);

  useEffect(() => {
    const storedTodos3 = localStorage.getItem('todos3');
    if (storedTodos3) {
      setTodos3(JSON.parse(storedTodos3));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos3', JSON.stringify(todos3));
  }, [todos3]);


  const addTodo = (newTodo3) => {
    setTodos3([...todos3, newTodo3]);
  };
  return (
    <div className='capitalize'>
      <ContentHeading title="review" number={todos3.length+4} />

      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      <Work2 title="Search Engine Optimisation" userImg={'/usera.png'} />
      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      {todos3.map((todo3) => (
        <Work2
          key={todo3.id}
          title={todo3.text}
          userImg={'/usera.png'}
        />
      ))}
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'} />
      <NewTask addTodo={addTodo} />
    </div>
  )
}

export default Content3