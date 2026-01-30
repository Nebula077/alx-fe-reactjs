import { use, useEffect, useState, useRef } from "react";
import { searchUsers } from "../services/githubService";
import './Search.css'
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [location, setLocation] = useState("");
  const [locationResults, setLocationResults] = useState([]);
  const [language, setLanguage] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [maxFollowers, setMaxFollowers] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await searchUsers({
        username: query,
        sort: 'followers',
        order: 'desc'
      });
      // Wait 2 seconds before displaying results
      setTimeout(() => {
        setResults(response.data.items);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setError("Looks like we cant find the user");
      setLoading(false);
    } finally {
      if (!/^[a-zA-Z0-9\s]+$/.test(query)) {
        setError("Looks like we cant find the user");
        setLoading(false);
        return;
      }
    }
  };

  const handleLocationSearch = async () => {
    if (!location.trim()) return;

    try {
      setLoading(true);
      setError(null);
      const response = await searchUsers({
        location: location,
        sort: 'followers',
        order: 'desc'
      });
      setTimeout(() => {
        setLocationResults(response.data.items);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setError("Looks like we cant find users in that location");
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async () => {
    const searchParams = {
      username: query || undefined,
      location: location || undefined,
      language: language || undefined,
      minRepos: minRepos ? parseInt(minRepos) : undefined,
      maxFollowers: maxFollowers ? parseInt(maxFollowers) : undefined,
      sort: 'followers',
      order: 'desc'
    };

    // Remove undefined values
    Object.keys(searchParams).forEach(key => {
      if (searchParams[key] === undefined) {
        delete searchParams[key];
      }
    });

    if (Object.keys(searchParams).length <= 2) { // Only sort and order
      setError("Please provide at least one search criteria");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await searchUsers(searchParams);
      setTimeout(() => {
        setResults(response.data.items);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      setError("Search failed. Please try different criteria.");
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      {/* Basic Username Search */}
      <div className="search-section">
        <h3>Basic Search</h3>
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search GitHub users by username"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">Search by Username</button>
        </form>
      </div>

      {/* Location Search */}
      <div className="search-section">
        <h3>Location Search</h3>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search by location (e.g., Nairobi, Kenya)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="search-input"
          />
          <button onClick={handleLocationSearch} className="search-btn">Search by Location</button>
        </div>
      </div>

      {/* Advanced Search */}
      <div className="search-section">
        <h3>Advanced Search</h3>
        <div className="advanced-search-form">
          <div className="form-row">
            <input
              type="text"
              placeholder="Username (optional)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input small-input"
            />
            <input
              type="text"
              placeholder="Location (optional)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="search-input small-input"
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              placeholder="Programming Language (optional)"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="search-input small-input"
            />
            <input
              type="number"
              placeholder="Min Repositories (optional)"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              className="search-input small-input"
              min="0"
            />
            <input
              type="number"
              placeholder="Max Followers (optional)"
              value={maxFollowers}
              onChange={(e) => setMaxFollowers(e.target.value)}
              className="search-input small-input"
              min="0"
            />
          </div>
          <button onClick={handleAdvancedSearch} className="search-btn advanced-btn">
            Advanced Search
          </button>
        </div>
      </div>

      {/* Status Messages */}
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* Search Results */}
      {results.length > 0 && (
        <div className="results-section">
          <h3>Search Results:</h3>
          <ul className="user-list">
            {results.map((user) => (
              <li key={user.id} className="user-item">
                <img src={user.avatar_url} alt={user.login} className="user-avatar" />
                <div className="user-info">
                  <strong>{user.login}</strong>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="user-link">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {locationResults.length > 0 && (
        <div className="results-section">
          <h3>Location Search Results:</h3>
          <ul className="user-list">
            {locationResults.map((user) => (
              <li key={user.id} className="user-item">
                <img src={user.avatar_url} alt={user.login} className="user-avatar" />
                <div className="user-info">
                  <strong>{user.login}</strong>
                  <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="user-link">
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;