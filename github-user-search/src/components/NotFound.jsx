import React from "react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page Not Found</h2>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="navigation-links">
          <Link to="/" className="home-link">
            Go to Home
          </Link>
          <Link to="/search" className="search-link">
            Search Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;