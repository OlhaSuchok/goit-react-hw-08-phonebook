// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import {
  Header,
  NavList,
  NavItem,
  AuthList,
  AuthListItem,
  UserMenuErapper,
  UserMenuText,
} from './AppBar.styled';

export default function AppBar() {
  return (
    <div>
      <Header>
        <NavList>
          <NavItem>Головна</NavItem>
          <li>Нотатки</li>
        </NavList>

        <AuthList>
          <AuthListItem>
            <NavLink to="/register">Реєстрація</NavLink>
          </AuthListItem>
          <AuthListItem>
            <NavLink to="/login">Логін</NavLink>
          </AuthListItem>
        </AuthList>

        <UserMenuErapper>
          <UserMenuText>Вітаю!</UserMenuText>
          <UserMenuText>Вийти</UserMenuText>
        </UserMenuErapper>
      </Header>
      <Outlet />
    </div>

    // <div>
    //   <MainHeader>
    //     <NavLinkButton>
    //       <NavLinkItem to="/">Home</NavLinkItem>
    //     </NavLinkButton>
    //     <NavLinkButton>
    //       <NavLinkItem to="/movies">Movie</NavLinkItem>
    //     </NavLinkButton>
    //   </MainHeader>
    //   <Suspense fallback={<Loader />}>
    //     <Outlet />
    //   </Suspense>
    // </div>
  );
}
