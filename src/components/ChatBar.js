import React, { useState, useEffect} from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <>
      <div className="pb-10">
        <h1 className="text-3xl font-bold">Open Chats</h1>
      </div>
      <div className="text-2xl font-semibold pb-5">
        <h2>Active Users</h2>
      </div>
      <ul className="">
        {users.map((el) => (
          <li className="py-2 text-primary hover:font-medium hover:underline" key={el.socketID}>
            {el?.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ChatBar;
