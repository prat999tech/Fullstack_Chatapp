import React from 'react'
import { FaSearch } from "react-icons/fa";


function Search() {
  return (
    <div className='h-[13vh]'>
            <div className='px-6 py-4'>
             <form action="">
                   <div className='flex space-x-3'>
                   <label className="border-[1px]  border-gray-700 bg-slate-900 rounded-lg p-3 flex items-centre gap-2 w-[80%]">
                     <input type="search" className="grow outline-none" placeholder="Search" />
                      
                       </label>
                       <button>
                        <FaSearch className='text-5xl p-2 hover:bg-gray-700 rounded-full duration-300'/>

                          </button>
                        </div>
                             </form>
                                    </div>
                                    </div>
  )
}

export default Search