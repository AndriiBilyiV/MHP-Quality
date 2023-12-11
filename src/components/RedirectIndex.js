import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RedirectIndex = () => {
  const { isIdentify } = useAuth();
  return isIdentify ? <Navigate to="/home" /> : <Navigate to="/register" />;
};
