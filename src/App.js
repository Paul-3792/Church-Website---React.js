import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Audio from './components/Audio/Audio';
import Departments from './components/Departments/Departments';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/Donate';
import Header from './components/Header/Header';
// import About_section from './components/Sections/About/About_section';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/department" element={<Departments />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
