import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to React Router Advanced</h1>
      <p>This application demonstrates:</p>
      <ul>
        <li>✓ Nested Routes (Profile with sub-routes)</li>
        <li>✓ Dynamic Routes (User profiles with IDs)</li>
        <li>✓ Protected Routes (Login required)</li>
        <li>✓ Route Navigation</li>
      </ul>
      <p className="info-text">
        Use the navigation above to explore different routes. Try logging in to access protected routes!
      </p>
    </div>
  );
};

export default Home;
