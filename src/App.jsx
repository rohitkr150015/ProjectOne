import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import About from './Components/About/About'
import Contact from './Components/ContactMe/Contact'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
     <Contact></Contact>
    </div>
  )
}

export default App