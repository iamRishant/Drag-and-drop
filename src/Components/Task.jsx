import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities';
import React from 'react'

const Task = ({title,id}) => {
    const {attributes,listeners,setNodeRef,transform,transition}=useSortable({id})

    const style={
        transition,
        transform:CSS.Transform.toString(transform)
    };
  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style} className='touch-none mt-5  p-5 shadow-lg bg-gray-200 rounded-lg'>
      <h1>{title}</h1>
    </div>
  )
}

export default Task
