import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to React Router Advanced</h1>
      <p>This application demonstrates:</p>
      <ul>
        <li>✓ Nested Routes (Profile with sub-routes)</li>
        <li>✓ Dynamic Routes (User profiles with IDs)</li>
        <li>✓ Dynamic Routes (Blog posts with IDs)</li>
        <li>✓ Protected Routes (Login required)</li>
        <li>✓ Route Navigation</li>
      </ul>
      
      <div className="blog-links">
        <h3>Featured Blog Posts:</h3>
        <ul>
          <li><Link to="/blog/1">Getting Started with React</Link></li>
          <li><Link to="/blog/2">Understanding Hooks</Link></li>
          <li><Link to="/blog/3">Routing in React</Link></li>
        </ul>
      </div>

      <p className="info-text">
        Use the navigation above to explore different routes. Try logging in to access protected routes!
      </p>
    </div>
  );
};

export default Home;
