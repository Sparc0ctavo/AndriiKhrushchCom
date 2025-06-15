import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import Profile from './pages/Profile/Profile.jsx'
import LanguageSwitch from './components/LanguageSwitch/LanguageSwitch.jsx'
import './i18n/i18n.js'
function App() {

  return (
    <>
    
    
    <Router>
      <header>
        <NavBar />
        <LanguageSwitch />
      </header>

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/Home" replace />} />
      </Routes>
    
    </Router>
    
   </>
  )
}

export default App
