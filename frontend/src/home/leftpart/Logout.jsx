import React from 'react'
import { CgLogOut } from "react-icons/cg";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';


function Logout () {
  const {loading, setLoading} = useState(false);
  const handlelogout=async ()=>{
    setLoading(true);
    try{
    const res= await axios.post("/api/user/logout")
    localStorage.removeItem("ChatApp");
    Cookies.remove("jwt");
   setLoading(false)
   alert("Logged out successfully");
    window.location.href="/login"; // Redirect to login page after logout
        
    


  }catch(error){
    console.error("Error during logout:", error);
    alert("An error occurred while logging out. Please try again.");
  }
}
  return (
    <div className='h-[13vh] '>
        <div >
            <CgLogOut className='text-5xl text-white  hover:bg-slate-700 duration-300 cursor-pointer' onClick={handleLogout}/>

        </div>

    </div>
  )
}


export default Logout
