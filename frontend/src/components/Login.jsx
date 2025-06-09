import React from 'react'


function Login() {
  return (
   <>
   <div>
   <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div className="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)"><img
          src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-44 inline-block' />
        </a>
        <h4 className="text-white text-base mt-6">Login into your account</h4>
      </div>

      <form>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Full Name</label>
            <input name="name" type="text" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" type="text" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
           <div>
           <label className="text-white text-sm font-medium mb-2 block">Confirm password</label>
            <input name="number" type="number" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="confirm password" />
          </div>
         
          
          <div>
            <label className="text-white text-sm font-medium mb-2 block"> Password</label>
            <input name="cpassword" type="password" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder=" password" />
          </div>
        </div>

        <div className="mt-12">
          <button type="button" className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
            Login
          </button>
        </div>
      </form>
   
      
    </div>

   </div>
   </>
  )
}

export default Login