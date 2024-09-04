import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Recommendations from './Recommendations';
import About from './About';
import Contact from './Contact'
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import IsMobile from './IsMobile';
import HouseArticle from './HouseArticle';
import Footer from './Footer';
import './App.css';

function App() {
  const isMobile = IsMobile();

  return (
    <Router>
      <div className="App">
        <div>
          {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="recommendations" element={<Recommendations />} />
            <Route path="about"  element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="house-rennovation" element={<HouseArticle />} />
          </Routes>
        </div>
        <div className="footer"><Footer /></div>
      </div>
    </Router>
  );
};

export default App;
