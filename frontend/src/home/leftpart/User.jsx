import React from 'react'
import { useSocketContext } from '../../context/SocketProvider';

function User({ user }) {
    const {socket,onlineUsers} = useSocketContext();
    const isOnline=onlineUsers.includes(user._id)
  return (
    <div className='flex space-x-4 px-9 py-4 hover:bg-slate-800 duration-300 cursor-pointer'>
                <div className={`avatar ${isOnline? "online":""}`}>
                    <div className="bg-neutral text-neutral-content w-12 rounded-full relative">
                        <span className="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">P</span>
                    </div>
                </div>
                <div>
                    <h1 >
                        {user.fullname}
                        
                    </h1>
                    <span>
                            {user.email}
                        </span>
                </div>
            </div>
  )
}

export default User