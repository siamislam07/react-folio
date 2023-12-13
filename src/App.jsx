
// import './App.css'

import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Skills from "./components/MySkills/Skills"
import Banner from "./components/banner/Banner"
import Projects from "./components/projects/Projects"
import Footer from "./shared/Footer/Footer"
import Navbar from "./shared/Navbar/Navbar"

function App() {
  
  return (
    <>
      
      <Navbar/>
      <Banner/>
      <About/>
      <Projects />
      <Skills/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
