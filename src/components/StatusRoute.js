import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const StatusRoute = ({ details }) => {
  const { status } = useAuth();
  switch (status) {
    case 'unknown':
      return details.unknown;
    case 'request':
      return details.request;
    case 'user':
      return details.user;
    case 'admin':
      return details.admin;
    default:
      return details.default;
  }
};

export const UserRoute = ({ Component }) => {
  const details = {
    default: <Navigate to="/register" />,
    unknown: <Navigate to="/register" />,
    request: <Navigate to="/register" />,
    user: Component,
    admin: Component,
  };
  return <StatusRoute details={details} />;
};
export const AdminRoute = ({ Component }) => {
  const details = {
    default: <Navigate to="/register" />,
    unknown: <Navigate to="/register" />,
    request: <Navigate to="/register" />,
    user: <Navigate to="/home" />,
    admin: Component,
  };
  return <StatusRoute details={details} />;
};
export const IndexRoute = () => {
  const details = {
    default: <Navigate to="/register" />,
    unknown: <Navigate to="/register" />,
    request: <Navigate to="/register" />,
    user: <Navigate to="/home" />,
    admin: <Navigate to="/home" />,
  };
  return <StatusRoute details={details} />;
};
