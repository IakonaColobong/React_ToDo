import React from 'react';
import CatForm from './CatForm';



export default function CatCreate(props) {
  return (
    <div className='createCategory m-2 text-center'>
        <CatForm
        getResources={props.getCategories}
        setShowCreate={props.setShowCreate} />
        </div>
  )
}
