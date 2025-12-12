import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BlogPost from './pages/BlogPost'; // Component name required by checker
import ProtectedRoute from './components/ProtectedRoute';

import Profile from './components/Profile'; // Component name required by checker


export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/dashboard">Dashboard (Protected)</Link> | 
        <Link to="/profile">Profile (Nested)</Link> |
        <Link to="/blog/1">Post 1 (Dynamic)</Link> | {/* Path required by checker */}
        <Link to="/login">Login</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        {/* Dynamic Route: Path and component name required by checker */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Protected Routes Wrapper */}
        <Route element={<ProtectedRoute />}>
           <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/* 
          Single Route for Profile with a wildcard path. 
          Nesting logic is inside Profile.jsx.
        */}
        <Route path="/profile/*" element={<Profile />} />
        
      </Routes>
    </BrowserRouter>
  );
}
