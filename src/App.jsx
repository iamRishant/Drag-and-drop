import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import React, { useState } from 'react'
import Columns from './Components/Columns';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import Input from './Components/Input';


const App = () => {

  const [tasks,setTasks]=useState([
    {
      id:1,
      title:"Task 1"
    },
    {
      id:2,
      title:"Task 2"
    },
    {
      id:3,
      title:"Task 3"
    }
  ]);

  const getTaskPos=(id)=>{
    return tasks.findIndex((task)=>task.id===id);
  }

  const handleDragEnd=(event)=>{
    // console.log(event);
    
    const {active,over}=event;
    // console.log(active,over);
    
    if(active.id===over.id) return;

    setTasks((tasks)=>{
      const originalPos=getTaskPos(active.id);
      const newPos=getTaskPos(over.id);

      return arrayMove(tasks,originalPos,newPos);
  })
  }
  const onSubmit=(title)=>{
    setTasks((tasks)=>{
      return [...tasks,{id:tasks.length+1,title}];
    });
  }



  // to use touch and keyboard
  const sensors=useSensors(
    useSensor(TouchSensor),
    useSensor(PointerSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter:sortableKeyboardCoordinates,
    })
  )

  return (
    <div className='w-screen min-h-screen fixed bg-gray-200 flex flex-col items-center'>
      <h1 className='text-3xl text-center mt-5'>Drag and Drop</h1>
      {/* dnd context tells us about the area where we can drop items */}
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
      <div className=' flex flex-col w-[50vw] bg-gray-300 shadow-xl rounded-lg p-10 mt-10'>

            <Input onSubmit={onSubmit}/>
            <Columns tasks={tasks}/>
      </div>
      </DndContext>
    </div>
  )
}

export default App
