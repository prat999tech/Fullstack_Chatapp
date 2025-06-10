import React from 'react'
import Left from './home/leftpart/left'
import Right from './home/rightpart/right'
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/Authprovider'; // Assuming you have a context for authentication
import { Routes,Route, Navigate } from 'react-router-dom'; // Importing for routing if needed

function App() {
      const {authUser, setAuthUser} = useAuth(); // Assuming you have a context for authentication
  console.log("Auth User:", authUser);
  return ( 
  
    <Routes>
      <Route path="/"
      element={
      authUser ?(
        <div className='flex h-screen'>
          <Left />
          <Right />
        </div>
      ) :  ( <Navigate to={"/login"}  />) // Redirect to login if not authenticated

      }
      />
     <Route path="/login" element={authUser?<Navigate to={"/"}/>:<Login />} />
      <Route path="/signup" element={authUser?<Navigate to={"/"}/>:<Signup />} />

        
    </Routes>


  );


}

export default App
