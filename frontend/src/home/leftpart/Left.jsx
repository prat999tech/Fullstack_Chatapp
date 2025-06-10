import React from 'react'
import Search from './Search';
import Users from './Users';
import Logout from './Logout';


function Left() {
  return <div className=' w-[30%] bg-black text-gray-300 flex flex-col'>
    <Search />
    <div
      className='flex-1 overflow-y-auto'
      style={{ maxHeight: "calc(84vh - 10vh)" }}
    >
      <Users />
    </div>
    <Logout />
  </div>;
    
  
}

export default Left