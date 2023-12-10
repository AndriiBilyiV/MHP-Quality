import { Home } from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUsers } from '../redux/operations';
import { getAllUsers } from './fareBaseInit';
import { Layout } from './Layout/Layout.styled';
import { RedirectIndex } from './RedirectIndex';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers();
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<RedirectIndex />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/home" />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Layout>
  );
};
