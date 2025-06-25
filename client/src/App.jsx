import React from 'react'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
import { Profile } from './pages/Profile'
import { Settings } from './pages/Settings'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Routes, Route } from 'react-router-dom'
export const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/settings" element={<Settings />} />
      
    </Routes>
    <Footer />
    </>
  )
}
