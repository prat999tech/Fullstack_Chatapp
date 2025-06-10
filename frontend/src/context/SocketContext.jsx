import { createContext, useEffect, useState, useContext } from "react";
import {useAuth} from "./Authprovider";
import { io } from "socket.io-client";
const SocketContext = createContext();
export const useSocketContext=()=>{

    return useContext(SocketContext);
}
export const SocketProvider= ({ children }) => {
    const [socket,setSocket]=useState(null);
    const {authUser} = useAuth();
    const [onlineUsers, setOnlineUsers] = useState([]);
    useEffect(() => {
        if (authUser) {
            const socket = io("http://localhost:8001", {
                query: {
                    userId: authUser.user._id, // Assuming authUser contains a token
                },
            });
            setSocket(socket);
            socket.on("getonlineuser",(users)=>{
                setOnlineUsers(users);
            });
            return()=>socket.close()
          
        }
        else{
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);
      return (
                <SocketContext.Provider value={{ socket, onlineUsers }}>
                    {children}
                </SocketContext.Provider>
            );
}