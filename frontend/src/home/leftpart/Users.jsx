import React from 'react'
import User from './User'

function Users() {
    return (
        <div>
            <h1 className='px-8 py-2 text-white font-semibold bg-slate-800 rounded-md'>
                Messages
            </h1>
           <div className='py-3 flex-1 overflow-y-auto' style={{maxHeight:"calc(74vh)"}}>
            <User />
             <User /> 
              <User />
               <User />
                <User />
                 <User />
                  <User />
                   <User />
                    <User />
           </div>
        </div>
    )
}

export default Users