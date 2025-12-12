import { useNavigate } from 'react-router-dom';
import { useAuth } from '../authService.jsx'; 

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = () => {
    login(); // Calls the context login function
    navigate('/dashboard', { replace: true });
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Log In (Simulated)</button>
    </div>
  );
}
