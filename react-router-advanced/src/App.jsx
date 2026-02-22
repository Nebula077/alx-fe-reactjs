import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Profile from './components/Profile';
import UserProfile from './components/UserProfile';
import BlogPost from './components/BlogPost';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <main className="main-content">
          <Routes>
        
            <Route path="/" element={<Home />} />

           
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/user/:userId" element={<UserProfile />} />
            <Route path="/blog/:id" element={<BlogPost />} />

            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
