import React from 'react'
import { IoSend } from "react-icons/io5";


function Typesend() {
  return (
    <div className='flex space-x-3 space-y-2 h-[8vh] text-center '>
    <div className='w-[95%]'>
        <input type="text" placeholder="Type here" className="input input-bordered w-full" />
    </div>
    <div>
        <button>
            <IoSend  className='text-3xl'/>
        </button>

    </div>
    </div>
    
    
    

  )
}

export default Typesend