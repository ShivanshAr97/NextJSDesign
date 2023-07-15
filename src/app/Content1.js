"use client"
import React, { useEffect, useState } from 'react';
import ContentHeading from './ContentHeading';
import Work from './Work';
import Work2 from './Work2';
import NewTask from './NewTask';

const Content1 = () => {
  const [todos1, setTodos1] = useState([]);

  useEffect(() => {
    const storedTodos1 = localStorage.getItem('todos1');
    if (storedTodos1) {
      setTodos1(JSON.parse(storedTodos1));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos1', JSON.stringify(todos1));
  }, [todos1]);


  const addTodo = (newTodo1) => {
    setTodos1([...todos1, newTodo1]);
  };

  return (
    <div className='capitalize'>
      <ContentHeading title="to do" number={todos1.length + 3} />
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'} />
      {todos1.map((todo1) => (
        <Work
          key={todo1.id}
          title={todo1.text}
          userImg={'/usera.png'}
          img={"/usere.jpeg"}
        />
      ))}
      <Work2 title="Make money online through" userImg={'/userb.png'} />
      <Work2 title="Search Engine Optimisation" userImg={'/userc.png'} />
      <NewTask addTodo={addTodo} />
    </div>
  );
};

export default Content1;
