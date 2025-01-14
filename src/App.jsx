import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import About from './pages/About'
import Service from './pages/Service'
import Project from './pages/Project'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>

      <Route path = "/" element={<Home/>}/>
      <Route path = "/about"  element = {<About/>}/>
      <Route path = "/service" element = {<Service/>}/>
      <Route path = "/project" element = {<Project/>}/>
      <Route path = "/contact" element = {<Contact/>}/>

    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App
