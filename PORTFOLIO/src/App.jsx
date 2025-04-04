
import About from "./SECTIONS/About"
import Contact from "./SECTIONS/Contact"
import Project from "./SECTIONS/Project"
import Skill from "./SECTIONS/Skill"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Handler from "./SECTIONS/Handler"
import Home from "./SECTIONS/Home"
import Profile from "./SECTIONS/Profile"




function App() {
  return (
    <>
      <BrowserRouter>
        <Handler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skill />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>

      </BrowserRouter>

    </>

  )
}

export default App