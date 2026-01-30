import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserProfile, getUserRepos } from "../services/githubService";
import './UserProfile.css';

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [userData, reposData] = await Promise.all([
          getUserProfile(username),
          getUserRepos(username, { per_page: 10 })
        ]);

        setUser(userData.data);
        setRepos(reposData.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("User not found or API limit exceeded");
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="loading-container">
        <p>Loading user profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h1>Error</h1>
        <p>{error}</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="not-found-container">
        <h1>User Not Found</h1>
        <p>The user "{username}" could not be found.</p>
        <Link to="/" className="back-link">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="user-profile">
      <div className="profile-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <div className="user-info">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="avatar"
          />
          <div className="user-details">
            <h1>{user.name || user.login}</h1>
            <p className="username">@{user.login}</p>
            {user.bio && <p className="bio">{user.bio}</p>}
            <div className="stats">
              <div className="stat">
                <strong>{user.followers}</strong>
                <span>Followers</span>
              </div>
              <div className="stat">
                <strong>{user.following}</strong>
                <span>Following</span>
              </div>
              <div className="stat">
                <strong>{user.public_repos}</strong>
                <span>Repositories</span>
              </div>
            </div>
            {user.location && (
              <p className="location">📍 {user.location}</p>
            )}
            {user.company && (
              <p className="company">🏢 {user.company}</p>
            )}
            {user.blog && (
              <p className="website">
                🌐 <a href={user.blog} target="_blank" rel="noopener noreferrer">
                  {user.blog}
                </a>
              </p>
            )}
            <p className="joined">
              📅 Joined {new Date(user.created_at).toLocaleDateString()}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="repos-section">
        <h2>Recent Repositories</h2>
        {repos.length > 0 ? (
          <div className="repos-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <h3>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                </h3>
                {repo.description && (
                  <p className="repo-description">{repo.description}</p>
                )}
                <div className="repo-stats">
                  {repo.language && (
                    <span className="language">● {repo.language}</span>
                  )}
                  <span className="stars">⭐ {repo.stargazers_count}</span>
                  <span className="forks">🍴 {repo.forks_count}</span>
                </div>
                <p className="updated">
                  Updated {new Date(repo.updated_at).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No public repositories found.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;