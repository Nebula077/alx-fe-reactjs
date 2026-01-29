import { use, useEffect, useState } from "react";
import githubService from "../services/githubService";
import './Search.css'
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


    const handleSubmit = (e) => {
      e.preventDefault();
      handleSearch();
    };
    const handleSearch = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await githubService.get("/search/users", {
          params: {
            q: query,
          },
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
      }
      finally {
        if (!/^[a-zA-Z0-9\s]+$/.test(query)) {
        setError("Looks like we cant find the user");
        setLoading(false);
        return;
      }
      }
    };


  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      
      <ul>
        {results.map((user) => (
          <li key={user.id}> <img src={user.avatar_url} alt={user.login} /> {user.login} - <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Search;