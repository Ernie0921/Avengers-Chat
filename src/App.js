import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from 'react';

import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom"
import Navbar from "./components/NavBar"
import Spinner from "./components/Spinner"
import './App.css';
import { auth } from './config';

const App = () => {
  const [currentRoom, setCurrentRoom ] = useState("Avengers Assemble!")
// access the user data . display different application states depending on if someone is logged in or not : boolean
  const [user] = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
    {loading && <Spinner />}
        <Navbar 
          user={user}
          currentRoom={currentRoom}
          setCurrentRoom={setCurrentRoom}
        />
        <div className="content">
          {user ? <ChatRoom currentRoom={currentRoom} /> : <Login />} {/*if a user exist the  the show chatroom component otherwise show login component*/}
        </div>
    </div>
  );
}

export default App;
