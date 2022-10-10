import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';

const Login = ({ socket }) => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [error, seterror] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      seterror("Enter your name");
      return;
    }

    setloading(true)
    seterror("")
    const room = uuid();
    localStorage.setItem('id', name);
    localStorage.setItem('room', room);
    socket.emit('newUser', { name, socketID: socket.id });
    setloading(false);
    navigate('/');
  }
  
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <form 
        class="mx-auto my-36 flex h-[220px] w-[350px] flex-col border-2 bg-white text-black shadow-xl"
        onSubmit={handleSubmit}
      >
        <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
          {/* <div class="h-7 w-3 bg-[#0DE6AC]"></div> */}
          <div class="w-3 text-center font-sans text-xl font-bold">
            <h1>Login</h1>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <input
            class="my-2 w-72 border p-2"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
          />
          {error && <div className="w-72 text-red-500 text-xs text-left">{error}</div>}

          {/* <input
            class="my-2 w-72 border p-2"
            type="password"
            placeholder="Password"
          /> */}
        </div>
        <div class="my-2 flex justify-center">
          <button 
            class="w-72 border bg-[#0DE6AC] p-2 font-sans font-bold" 
            disabled={loading}
            type="submit"
          >
            Login
            {loading && <span> ... </span>}
          </button>
        </div>

        <div class="mx-7 my-3 flex justify-between text-sm font-semibold hidden">
          <div>
            <h1>Forget Password</h1>
          </div>
          <div>
            <h1 class="underline underline-offset-2">Signup</h1>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
