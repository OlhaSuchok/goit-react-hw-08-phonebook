import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';
import {
  NavWrapper,
  NavList,
  NavItem,
  NavigationNavLink,
} from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavWrapper>
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
    </NavWrapper>
  );
}
