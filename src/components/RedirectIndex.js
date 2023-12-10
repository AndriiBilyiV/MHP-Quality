import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RedirectIndex = () => {
  const { isIdetify } = useAuth();
  return isIdetify ? <Navigate to="/home" /> : <Navigate to="/register" />;
};
