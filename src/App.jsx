import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

// Pages
import Home from "./pages/Home.jsx";



import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Footer from "./components/Footer.jsx";
import { Navbar } from "./components/Navbar.jsx";
function App() {
  return (
    <>
      {/* SNAP SCROLL CONTAINER */}
      <div 
      id="scroll-container"
      
      className="h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
      </div>

      {/* NORMAL FLOW FOOTER (NO SNAP) */}
    </>
  );
}

export default App;
