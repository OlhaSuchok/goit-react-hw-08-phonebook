import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import Loader from 'components/Loader/Loader';
import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/Auth-operations';
import AppBar from 'pages/AppBar/AppBar';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
import PrivatRoute from './PrivatRoure/PrivatRoure';
import PublicRoute from './PublicRoute/PublicRoute';
import { selectisFetchingCurrentUser } from 'redux/auth/Auth-selectors';

// const Contacts = lazy(() => import('pages/Contacts/Contacts'));
// const Home = lazy(() => import('pages/Home/Home'));
// const Register = lazy(() => import('pages/Register/Register'));
// const Login = lazy(() => import('pages/Login/Login'));

// const Home = lazy(() => import('../pages/Home/Home'));
// const Register = lazy(() => import('../pages/Register/Register'));
// const Login = lazy(() => import('../pages/Login/Login'));
// const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectisFetchingCurrentUser);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box p={30}>
      {isFetchingCurrentUser ? (
        <Loader />
      ) : (
        <>
          <AppBar />
          <Routes>
            {/* <Route
              path="/"
              element={
                <PublicRoute redirectTo="/contacts" element={<Home />} />
              }
            /> */}

            <Route
              path="/"
              element={<PrivatRoute redirectTo="/login" element={<Home />} />}
            />

            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo="/contacts"
                  element={<Register />}
                  restricted
                />
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/" element={<Login />} restricted />
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivatRoute redirectTo="/login" element={<Contacts />} />
              }
            />
          </Routes>
        </>
      )}
    </Box>
  );
}
