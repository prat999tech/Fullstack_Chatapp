import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../zustand/useConversation.js";
import sound from "../assets/notification.mp3";
const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation();

  useEffect(() => {
    socket.on("newmessage", (newmessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessage([...messages, newmessage]);
    });
    return () => {
      socket.off("newmessage");
    };
  }, [socket, messages, setMessage]);
};
export default useGetSocketMessage;