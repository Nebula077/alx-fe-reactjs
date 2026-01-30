import React from "react";
import fetchUserData from "../services/githubService";
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Search";
import './Home.css';

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetchUserData("/users");
        console.log(response.data);
        setUsers(response.data);
      } catch (error) {
        console.error(error); 
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <Search />
        {users.map((user) => (
          <li key={user.id} style={{ listStyle: 'decimal' }}> <img src={user.avatar_url} alt={user.login} /> {user.login} - <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Home;