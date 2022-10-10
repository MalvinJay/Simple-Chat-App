import React, { useEffect, useState, useRef } from "react";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import ChatBar from "./ChatBar";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";

const ChatUI = ({ socket }) => {
  const navigate = useNavigate();
  const [room, setRoom] = useLocalStorage("room", "");
  const [id, setId] = useLocalStorage("id", "");

  const [messages, setMessages] = useState([]);
  const [typingStatus, setTypingStatus] = useState("");

  const lastMessageRef = useRef(null);

  const logOut = () => {
    socket.disconnect();
    setRoom("");
    setId("");
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    socket.on("messageResponse", (data) => {
      setMessages([...messages, data]);
    });
  }, [socket, messages]);

  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data) => setTypingStatus(data));
  }, [socket]);

  return (
    <div className="w-full flex items-start">
      <div className="w-1/5 h-screen bg-slate-50 text-left p-10">
        <ChatBar socket={socket} />
      </div>
      <div className="w-4/5">
        <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
          <ChatBody
            id={id}
            messages={messages}
            logOut={logOut}
            lastMessageRef={lastMessageRef}
            typingStatus={typingStatus}
          />
          <ChatFooter socket={socket} id={id} />
        </div>
      </div>

      <style jsx>
        {`
          .scrollbar-w-2::-webkit-scrollbar {
            width: 0.25rem;
            height: 0.25rem;
          }

          .scrollbar-track-blue-lighter::-webkit-scrollbar-track {
            --bg-opacity: 1;
            background-color: #f7fafc;
            background-color: rgba(247, 250, 252, var(--bg-opacity));
          }

          .scrollbar-thumb-blue::-webkit-scrollbar-thumb {
            --bg-opacity: 1;
            background-color: #edf2f7;
            background-color: rgba(237, 242, 247, var(--bg-opacity));
          }

          .scrollbar-thumb-rounded::-webkit-scrollbar-thumb {
            border-radius: 0.25rem;
          }
        `}
      </style>
    </div>
  );
};

export default ChatUI;
