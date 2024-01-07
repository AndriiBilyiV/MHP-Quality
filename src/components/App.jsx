import { AddArea } from 'pages/AddArea';
import { AddDepartment } from 'pages/AddDepartment';
import { AddPosition } from 'pages/AddPosition';
import { AllUsers } from 'pages/AllUsers';
import { Aprove } from 'pages/Aprove';
import { CheckCrash } from 'pages/CheckCrash';
import { CrashView } from 'pages/CrasfView';
import { FirstTime } from 'pages/FirstTime';
import { Home } from 'pages/Home';
import { NotAproved } from 'pages/NotAproved';
import { Register } from 'pages/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUsers } from '../redux/operations';
import { getAllUsers } from './firebase';
import { Layout } from './Layout/Layout.styled';
import { StatusRoute, UserRoute, AdminRoute, IndexRoute } from './StatusRoute';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllUsers();
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IndexRoute />} />
        <Route
          path="/register"
          element={
            <StatusRoute
              details={{
                default: <Register />,
                unknown: <FirstTime />,
                request: <NotAproved />,
                user: <Navigate to="/home" />,
                admin: <Navigate to="/home" />,
              }}
            />
          }
        />
        <Route path="/home" element={<UserRoute Component={<Home />} />} />
        <Route
          path="/add-department"
          element={<AdminRoute Component={<AddDepartment />} />}
        />
        <Route
          path="/user-requests"
          element={<AdminRoute Component={<Aprove />} />}
        />
        <Route
          path="/all-users"
          element={<AdminRoute Component={<AllUsers />} />}
        />
        <Route
          path="/add-position"
          element={<AdminRoute Component={<AddPosition />} />}
        />
        <Route
          path="/add-area"
          element={<AdminRoute Component={<AddArea />} />}
        />
        <Route
          path="/crash"
          element={<UserRoute Component={<CheckCrash />} />}
        />
        <Route
          path="/crash/table"
          element={<UserRoute Component={<CrashView />} />}
        />
      </Routes>
    </Layout>
  );
};
