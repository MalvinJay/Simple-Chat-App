import React, { useEffect } from 'react'
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import socketIO from 'socket.io-client';
import Home from "./pages/home"
import Login from "./pages/login"

const socket = socketIO.connect('http://localhost:4000');

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user info exist
    const userSession = localStorage.getItem('id')
    if (!userSession) navigate('/login')
  }, [navigate])
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home socket={socket} /> } />
        <Route path="/login" element={ <Login socket={socket} /> } />
      </Routes>      
    </div>
  );
}

export default App;
