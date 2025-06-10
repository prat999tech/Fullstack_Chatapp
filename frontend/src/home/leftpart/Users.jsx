import React from 'react'
import User from './User'

function Users() {
    const [allUsers,loading]=useGetAllUsers();
    return (

        <div>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
                Messages
            </h1>
           <div className='py-3 flex-1 overflow-y-auto' style={{maxHeight:"calc(74vh)"}}>
            {allUsers.map((user) => (
                <User key={user._id} user={user} />
            ))}
           </div>
        </div>
    )
}

export default Users