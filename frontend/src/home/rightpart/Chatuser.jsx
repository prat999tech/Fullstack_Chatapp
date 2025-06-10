import React from 'react'
import { useSocketContext } from '../../context/SocketContext';

function Chatuser() {
  const {onlineUsers}= useSocketContext();
  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId) ? 'online' : 'offline';
  }

  return (
    <div className='flex space-x-3 items-center justify-center h-[8vh] bg-gray-800 hover:bg-gray-700 duration-300'>
     <div className="avatar avatar-placeholder">
     <div className="bg-neutral text-neutral-content w-12 rounded-full relative">
     <span className="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">P</span>
     </div>
     </div> 
     <div>
        <h1 className='text-xl'>
            Prateek piyush
           
        </h1>
         <span className='text-sm'>
            {getOnlineUsersStatus(selectedConversation._id)}
        </span>
        
     </div>
      </div>
  )
}

export default Chatuser