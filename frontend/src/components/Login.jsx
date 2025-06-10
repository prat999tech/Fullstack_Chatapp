import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Ensure axios is installed and imported
import { useAuth } from '../context/Authprovider'; // Assuming you have a context for authentication

function Login() {
        const {authUser, setAuthUser} = useAuth(); // Assuming you have a context for authentication
    
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    
       const onSubmit = (data) => {
            const userinfo={
                fullname: data.fullname,
                email: data.email,
                password: data.password,
            }
            //console.log(userinfo);
            axios.post("http://localhost:8001/api/v1/user/login", userinfo)
            .then((response) => {
                console.log( response.data);
                if(response.data) {
                 alert("User signed up successfully");
    
                }
                localStorage.setItem("ChatApp",JSON.stringify(response.data));
                setAuthUser(response.data);

                // Handle//  successful signup, e.g., redirect to login page
            })
            .catch((error) => {
                if(error.response ) {
                    alert(error.response.data.error || "An error occurred during signup");
                }
                // Handle error, e.g., show an error message
            });
        };
        const onError = (errors) => {
            console.error(errors);
        }
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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Full Name</label>
            <input name="name" type="text" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          
          <div>
            <label className="text-white text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" type="text" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" {...register("email", { required: true })}/>
          </div>
           <div>
           <label className="text-white text-sm font-medium mb-2 block">Confirm password</label>
            <input name="number" type="number" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder="confirm password" />
          </div>
         
          
          <div>
            <label className="text-white text-sm font-medium mb-2 block"> Password</label>
            <input name="cpassword" type="password" className="bg-slate-100 w-full text-white text-sm px-4 py-3 rounded focus:bg-transparent outline-blue-500 transition-all" placeholder=" password" {...register("password", { required: true })} />
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