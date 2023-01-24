import React from 'react';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import Button from '@mui/material-next/Button';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';
import { NavList, NavItem, NavigationNavLink } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavList>
        {isLoggedIn && (
          <>
            <NavItem>
              <NavigationNavLink to="/">Головна</NavigationNavLink>
            </NavItem>
            <NavItem>
              <NavigationNavLink to="/contacts">
                Книга контактів
              </NavigationNavLink>
            </NavItem>
          </>
        )}
      </NavList>
    </>
  );
}
