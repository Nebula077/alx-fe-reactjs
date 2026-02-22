import { Link, Routes, Route, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';
import '../styles/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <p>This is a nested route example. Choose a section below:</p>
      
      <div className="profile-nav">
        <Link to="/profile/details" className="profile-link">Profile Details</Link>
        <Link to="/profile/settings" className="profile-link">Profile Settings</Link>
      </div>

      <div className="profile-content">
        <Routes>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
