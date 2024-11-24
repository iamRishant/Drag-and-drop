import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import React from 'react'
import Task from './Task'

const Columns = ({tasks}) => {
  return (
    <div>
    {/* jiss bhi element ko drag krna hai usko sortable se wrap krenge */}
    <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
      {
        tasks.map((task)=>(
            <Task title={task.title} id={task.id} key={task.id}/>
        ))
      }
    </SortableContext>
    </div>
  )
}

export default Columns
