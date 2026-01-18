import { Link } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Services from '../Services';

function NavBar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', marginTop: '20px'}}>
      <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '0 10px' }}>About</Link>
      <Link to="/contact" style={{ margin: '0 10px' }}>Contact</Link>
        <Link to="/services" style={{ margin: '0 10px' }}>Services</Link>
    </nav>
  );
}

export default NavBar;
