import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const AdminRoute = ({ component: Component }) => {
  const { isAdmin } = useAuth();
  if (isAdmin) {
    return Component;
  }
  return <Navigate to="/home" />;
};
