import React from 'react'

function User() {
  return (
    <div className='flex space-x-4 px-9 py-4 hover:bg-slate-800 duration-300 cursor-pointer'>
                <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content w-12 rounded-full relative">
                        <span className="text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">P</span>
                    </div>
                </div>
                <div>
                    <h1>
                        Prateek Piyush
                        
                    </h1>
                    <span>
                            Prateekpiyush@ranchi.com
                        </span>
                </div>
            </div>
  )
}

export default User