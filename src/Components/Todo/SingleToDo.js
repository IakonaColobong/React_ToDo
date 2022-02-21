import React from 'react'

export default function SingleToDo(props) {
  return (
    <div className='singleToDo col-md-5 m-4'>
        <h3>{props.toDo.Action}</h3>
        <h3>{props.toDo.Done}</h3>
        </div>
  )
}
