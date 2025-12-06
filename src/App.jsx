import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";

// Pages
import Home from "./pages/Home.jsx";



import About from "./pages/About.jsx";
import Pricing from "./pages/Pricing.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />

      {/* Main Content Wrapper */}

        {/* pt-20 prevents content from hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          
        </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
