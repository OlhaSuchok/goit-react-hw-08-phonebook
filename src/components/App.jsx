import { Suspense, useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Blocks from 'components/MainLoader/MainLoader';
import { Box } from 'components/Box/Box';
import AppBar from 'pages/AppBar/AppBar';
import PrivatRoute from './PrivatRoure/PrivatRoure';
import PublicRoute from './PublicRoute/PublicRoute';
import { fetchCurrentUser } from 'redux/auth/Auth-operations';
import { selectisFetchingCurrentUser } from 'redux/auth/Auth-selectors';
const Home = lazy(() => import('../pages/Home/Home'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(selectisFetchingCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box p={30}>
      {isFetchingCurrentUser ? (
        <Blocks />
      ) : (
        <>
          <AppBar />
          <Suspense fullback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute redirectTo="/contacts" element={<Home />} />
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute
                    redirectTo="/"
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
              <Route path="*" element={<Login />} />
            </Routes>
          </Suspense>
        </>
      )}
    </Box>
  );
}
