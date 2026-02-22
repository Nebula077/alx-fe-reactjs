import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import '../styles/Navigation.css';

const Navigation = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>React Router App</h2>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/user/1">User 1</Link></li>
        <li><Link to="/user/2">User 2</Link></li>
        <li><Link to="/blog/1">Blog</Link></li>
      </ul>

      <div className="nav-auth">
        {isAuthenticated ? (
          <>
            <span className="auth-status">Logged In ✓</span>
            <button onClick={logout} className="auth-btn">Logout</button>
          </>
        ) : (
          <>
            <span className="auth-status">Not Logged In</span>
            <button onClick={login} className="auth-btn">Login</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
