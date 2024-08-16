import './App.css'
import { Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Public from './components/Public';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Auth />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/public" element={<Public />}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
