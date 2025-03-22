import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import Detail from './Pages/UserDetail';
import Contact from './Pages/Contact';
import UserDetail from './Pages/UserDetail';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<User/>} />
        <Route path='/detail/:ID' element={<UserDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App