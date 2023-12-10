import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component }) => {
  const { isIdentify } = useAuth();
  return !isIdentify ? <Navigate to="/register" /> : Component;
};
