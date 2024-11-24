import React, { useState } from 'react'

const Input = ({onSubmit}) => {
    const [title,setTitle]=useState("");

    const handleSubmit=()=>{
        if(!title) return ;
        onSubmit(title);
        setTitle("");
    }
  return (
    <div className=' inline-block w-full mt-6 text-center   rounded-lg'>
      <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" placeholder='Enter Task...' className='p-3 text-2xl outline-none w-[60%]' />
      <button className='px-6 py-3 bg-green-300 text-black font-bold rounded-lg text-2xl  ' onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default Input
