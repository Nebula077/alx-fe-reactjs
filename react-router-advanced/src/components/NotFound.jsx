import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="dashboard-container">
      <h1>Protected Dashboard</h1>
      {isAuthenticated && (
        <div className="dashboard-content">
          <p>You are logged in and can access this protected route!</p>
          <div className="dashboard-info">
            <h3>Dashboard Features:</h3>
            <ul>
              <li>Profile Management</li>
              <li>Settings Configuration</li>
              <li>User Preferences</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
