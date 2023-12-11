import { useSelector } from 'react-redux';
import {
  selectAdmin,
  selectCompany,
  selectEmail,
  selectIdentify,
  selectIsLoggedIn,
  selectPosition,
  selectPositionDisplay,
  selectUser,
  selectUserName,
  selectUsersArray,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const userPosition = useSelector(selectPosition);
  const userPositionDisplay = useSelector(selectPositionDisplay);
  const isIdentify = useSelector(selectIdentify);
  const email = useSelector(selectEmail);
  const company = useSelector(selectCompany);
  const user = useSelector(selectUser);
  const isAdmin = useSelector(selectAdmin);
  const usersArray = useSelector(selectUsersArray);

  return {
    isLoggedIn,
    userName,
    userPosition,
    userPositionDisplay,
    isIdentify,
    email,
    company,
    user,
    isAdmin,
    usersArray,
  };
};
