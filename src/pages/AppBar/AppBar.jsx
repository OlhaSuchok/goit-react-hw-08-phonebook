// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigation } from 'components/Navigavion/Navigation';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';

import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      {/* <Suspense fullback={null}> */}
      <Outlet />
      {/* </Suspense> */}
    </Header>
  );
}
