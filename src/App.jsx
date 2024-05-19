import React from 'react'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Skills from './pages/Skills.jsx'
import Education from './pages/Education.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Projects from './pages/Projects.jsx'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/skills" element={<Skills />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/education" element={<Education />}/>
    <Route path="/contact" element={<Contact />}/>
    
   </Routes>
   </BrowserRouter>
  )
}

export default App