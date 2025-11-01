import { Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Buy from "./components/pages/Buy"
import Explore from "./components/pages/Explore"
import Contact from "./components/pages/Contact"
import About from "./components/pages/About"
import DetailedCard from "./components/pages/DetailedCard"
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/property/:id" element={<DetailedCard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App