import { Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Buy from "./components/pages/Buy"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import DetailedCard from "./components/pages/DetailedCard"
import Agents from "./components/pages/Agents"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/property/:id" element={<DetailedCard />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App