import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './components/Contact';
import NavBar from './components/Navbar';
import Services from './Services';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<h1 style={{ padding: '20px' }}>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;