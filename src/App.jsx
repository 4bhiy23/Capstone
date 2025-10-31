import { Button } from "@/components/ui/button"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import WhyUs from "./components/WhyUs"
import Featured from "./components/Featured"
import Flow from "./components/Flow"
function App() {
  return (
    // <div className="">
    //   <Button>Click me</Button>
    // </div>
    <div>
      <Navbar />
      <HeroSection />
      <WhyUs />
      <Featured />
      <Flow />
    </div>
  )
}

export default App