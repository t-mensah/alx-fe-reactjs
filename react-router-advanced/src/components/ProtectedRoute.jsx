import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../authService.jsx'; 

export default function ProtectedRoute() {
  const { user } = useAuth();

  // If a user object exists, render children via Outlet; otherwise redirect to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
