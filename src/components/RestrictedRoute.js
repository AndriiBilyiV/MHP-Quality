import { useAuth } from 'hooks/useAuth';
import { FirstTime } from 'pages/FirstTime';
import { Register } from 'pages/Register';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ redirectTo = '/' }) => {
  const { isLoggedIn, isIdentify } = useAuth();
  return isIdentify ? (
    <Navigate to={redirectTo} />
  ) : isLoggedIn ? (
    <FirstTime />
  ) : (
    <Register />
  );
};
