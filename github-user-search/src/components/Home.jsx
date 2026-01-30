import React from "react";
import fetchUserData from "../services/githubService";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchUserData("/users");
        setUsers(response.data);
      } catch (error) {
        setError("Something went wrong. Please try again."); 
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>GitHub User Search</h1>
        <p>Find and explore GitHub users from around the world</p>
        <nav className="home-nav">
          <Link to="/search" className="nav-link">Advanced Search</Link>
        </nav>
      </header>

      <main className="home-main">
        <section className="featured-users">
          <h2>Featured Users</h2>
          <div className="users-grid">
            {Array.isArray(users) && users.slice(0, 6).map((user) => (
              <div key={user.id} className="user-card">
                <img src={user.avatar_url} alt={user.login} className="user-avatar" />
                <div className="user-info">
                  <h3>
                    <Link to={`/user/${user.login}`} className="user-link">
                      {user.login}
                    </Link>
                  </h3>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="github-link">
                    View Profile →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="search-section">
          <h2>Search Users</h2>
          <Search />
        </section>
      </main>
    </div>
  );
};

export default Home;