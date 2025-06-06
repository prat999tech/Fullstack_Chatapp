import React from 'react'
import { CgLogOut } from "react-icons/cg";


function Logout () {
  return (
    <div className='h-[13vh] '>
        <div >
            <CgLogOut className='text-5xl text-white  hover:bg-slate-700 duration-300 cursor-pointer'/>

        </div>

    </div>
  )
}

export default Logout
