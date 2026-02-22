import '../styles/ProfileDetails.css';

const ProfileDetails = () => {
  return (
    <div className="profile-details">
      <h2>Profile Details (Nested Route)</h2>
      <div className="details-card">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> john@example.com</p>
        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
        <p><strong>Location:</strong> San Francisco, CA</p>
        <p><strong>Bio:</strong> Full-stack developer passionate about React and Web Development</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
