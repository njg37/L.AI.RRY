import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

// Pages
import Home from "./pages/Home/Home.jsx";
import ExamsList from "./pages/Exams/ExamsList.jsx";
import ExamDetails from "./pages/Exams/ExamDetails.jsx";
import Pricing from "./pages/Pricing/Pricing.jsx";
import About from "./pages/About/About.jsx";
import Login from "./pages/Auth/Login.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />

      {/* Main Content Wrapper */}
      <div> 
        {/* pt-20 prevents content from hiding behind fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<ExamsList />} />
          <Route path="/exams/:id" element={<ExamDetails />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
