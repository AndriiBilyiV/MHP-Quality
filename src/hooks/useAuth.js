import { useSelector } from 'react-redux';
import {
  selectCompany,
  selectEmail,
  selectIdetify,
  selectIsLoggedIn,
  selectType,
  selectUser,
  selectUserName,
} from '../redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userName = useSelector(selectUserName);
  const userType = useSelector(selectType);
  const isIdetify = useSelector(selectIdetify);
  const email = useSelector(selectEmail);
  const company = useSelector(selectCompany);
  const user = useSelector(selectUser);

  return { isLoggedIn, userName, userType, isIdetify, email, company, user };
};
