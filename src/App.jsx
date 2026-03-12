import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import WhyHireMe from "./components/WhyHireMe"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { motion } from "framer-motion"

function App(){

  return(
      <motion.div
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.6 }}
>


    <>
      <Navbar/>
      <Hero/>
      <About/>
      <WhyHireMe/>
      <Skills/>
      <Projects/>
      <Education/>
      <Certifications/>
      <Contact/>
      <Footer/>
    </>
    </motion.div>

  )

}

export default App