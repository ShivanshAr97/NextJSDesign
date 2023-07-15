"use client"
import React, {useEffect, useState} from 'react'
import ContentHeading from './ContentHeading'
import Work from './Work';
import Work2 from './Work2';
import NewTask from './NewTask';

const Content2 = () => {
  const [todos2, setTodos2] = useState([]);

  useEffect(() => {
    const storedTodos2 = localStorage.getItem('todos2');
    if (storedTodos2) {
      setTodos2(JSON.parse(storedTodos2));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos2', JSON.stringify(todos2));
  }, [todos2]);


  const addTodo = (newTodo2) => {
    setTodos2([...todos2, newTodo2]);
  };

  return (
    <div className='capitalize'>
      <ContentHeading title="in work" number={todos2.length+3} />
      <Work2 title="Types of Papers In Catalog" userImg={'/userb.png'} />
      {todos2.map((todo) => (
        <Work2
          key={todo.id}
          title={todo.text}
          userImg={'/usera.png'}
        />
      ))}
      <Work title="Make money online through" userImg={'/userc.png'} img={"/userf.jpeg"} />
      <Work2 title="Search Engine Optimisation" userImg={'/usera.png'} />
      <NewTask addTodo={addTodo} />
    </div>
  )
}

export default Content2