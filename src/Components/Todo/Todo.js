import React, {useState, useEffect} from 'react';
import sampleToDo from '../../Utilities/sampleToDo';
import { Container } from 'react-bootstrap';
import SingleToDo from './SingleToDo';
import axios from 'axios';
import './ToDo.css';


export default function Todo() {
const [toDo, setToDo] = useState(sampleToDo);

const getTodo = () => {
  axios.get('http://localhost:61594/api/todo').then(response => {
    setToDo(response.data);
  })
}

useEffect(() => {
  
  getTodo();
}, []);

  return (
      <section className='todo'>
         <article className='bg-info p-5'>
           <h1 className='text-center'> To Do list</h1> 
         </article>
         <Container>
           <article className='toDoGallery row justify-content center'>
             {toDo.map(x => 
              <SingleToDo key={x.ToDoId} toDo={x} />
              )}
           </article>
         </Container>
      </section>
  )
}
