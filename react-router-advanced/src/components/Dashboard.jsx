import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The route you're looking for doesn't exist.</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default NotFound;
