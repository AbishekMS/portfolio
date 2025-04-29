//import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import logo from './assets/logo.png';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Project from './pages/Project';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';  
function App() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-100
    bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)]
    [background-size:20px_20px]">
      
      <div className='absolute pt-2.5 pl-4 hidden md:block'>
        <img src={logo} alt="Logo" width="60" height="100"/>
      </div>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </Router>
      
    </div>
  )
}


export default App
