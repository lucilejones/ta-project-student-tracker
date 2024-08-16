import React, { useContext } from 'react';
import { UserContext } from './context/UserProvider';
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Public from './components/Public';

function App() {
  const { token, logout } = useContext(UserContext);

  return (
    <>
      {token && <Navbar logout={logout}/>}
      <div>
        <Routes>
          <Route path="/" element={token ? <Navigate to="/profile" /> : <Auth />}/>
          <Route path="/profile" element={token ? <Profile /> : <Navigate to="/" />}/>
          <Route path="/public" element={token ? <Public /> : <Navigate to="/" /> }/>
        </Routes>
      </div>
    </>
  )
}

export default App;
