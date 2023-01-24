import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
import { Box } from 'components/Box/Box';
import AppBar from 'pages/AppBar/AppBar';
import Contacts from 'pages/Contacts/Contacts';
import Home from 'pages/Home/Home';
import Register from 'pages/Register/Register';
import Login from 'pages/Login/Login';
// const AppBar = lazy(() => import('../pages/AppBar'));
// const Contacts = lazy(() => import('../pages/Contacts'));
// import { selectContacts } from 'redux/contacts/Contacts-selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { fetchContacts } from 'redux/contacts/Contacts-operations';
import { fetchCurrentUser } from 'redux/auth/Auth-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Box p={30}>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Box>

    // <Routes>
    //   <Route path="/" element={<AppBar />}>
    //     <Route path="products" element={<Contacts />} />
    //   </Route>
    // </Routes>
  );
}
