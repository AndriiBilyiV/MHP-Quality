import { AddArea } from 'pages/AddArea';
import { AddDepartment } from 'pages/AddDepartment';
import { AddPosition } from 'pages/AddPosition';
import { AllUsers } from 'pages/AllUsers';
import { CheckCrash } from 'pages/CheckCrash';
import { CrashView } from 'pages/CrasfView';
import { Home } from 'pages/Home';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUsers } from '../redux/operations';
import { AdminRoute } from './AdminRoute';
import { getAllUsers } from './firebase';
import { Layout } from './Layout/Layout.styled';
import { PrivateRoute } from './PrivatRoute';
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
        <Route path="/home" element={<PrivateRoute component={<Home />} />} />
        <Route
          path="/add-department"
          element={<AdminRoute component={<AddDepartment />} />}
        />
        <Route
          path="/all-users"
          element={<AdminRoute component={<AllUsers />} />}
        />
        <Route
          path="/add-position"
          element={<AdminRoute component={<AddPosition />} />}
        />
        <Route
          path="/add-area"
          element={<AdminRoute component={<AddArea />} />}
        />
        <Route
          path="/crash"
          element={<PrivateRoute component={<CheckCrash />} />}
        />
        <Route
          path="/crash/table"
          element={<PrivateRoute component={<CrashView />} />}
        />
      </Routes>
    </Layout>
  );
};
