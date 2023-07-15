"use client"
import React, {useEffect, useState} from 'react'
import ContentHeading from './ContentHeading'
import Work2 from './Work2';
import NewTask from './NewTask';
import Work from './Work';

const Content4 = () => {
  const [todos4, setTodos4] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos4');
    if (storedTodos) {
      setTodos4(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos4', JSON.stringify(todos4));
  }, [todos4]);

  const addTodo = (newTodo4) => {
    setTodos4([...todos4, newTodo4]);
  };

  return (
    <div className='capitalize'>
      <ContentHeading title="done" number={todos4.length+1} />
      {todos4.map((todo4) => (
        <Work
          key={todo4.id}
          title={todo4.text}
          userImg={'/usera.png'}
          img={"/usere.jpeg"}
        />
      ))}
      <Work2 title="Types of Papers In Catalog" userImg={'/userc.png'} />
      <NewTask addTodo={addTodo} />
    </div>
  )
}

export default Content4