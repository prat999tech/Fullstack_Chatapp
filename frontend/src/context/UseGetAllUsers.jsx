import React from 'react'
import { useState } from 'react';
import Cookies from 'js-cookie';

function UseGetAllUsers() {
 const [allUsers,setAllUsers] = useState([]);
    const [loading, setLoading] = useState(flase);
    useEffect(()=>{
        const getUsers=async()=>{
            try {
                const tokens=Cookies.get("jwt")
               const response= await axios.get("/api/user/allusers",{
                    headers: {
                        Authorization: `Bearer ${tokens}`
                    },
                    credentials:"include"
                })
                setAllUsers(response.data);
                setLoading(false);
              

            } catch (error) {
               console.log("Error in useGetAllUsers:",error);
            } 
            
        };
        getUsers();
        
    },[])
    return [allUsers, loading ];
    }


export default UseGetAllUsers