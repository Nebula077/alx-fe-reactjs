import { useParams, Link } from 'react-router-dom';
import '../styles/UserProfile.css';

const UserProfile = () => {
  const { userId } = useParams();

  const users = {
    1: { name: 'Alice Johnson', role: 'Developer', posts: 24 },
    2: { name: 'Bob Smith', role: 'Designer', posts: 18 },
    3: { name: 'Carol White', role: 'Manager', posts: 31 },
  };

  const user = users[userId];

  if (!user) {
    return (
      <div className="user-profile-container">
        <h1>User Not Found</h1>
        <p>The user with ID {userId} does not exist.</p>
        <Link to="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="user-profile-container">
      <h1>User Profile (Dynamic Route)</h1>
      <div className="user-card">
        <h2>{user.name}</h2>
        <p><strong>ID:</strong> {userId}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Posts:</strong> {user.posts}</p>
      </div>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default UserProfile;
