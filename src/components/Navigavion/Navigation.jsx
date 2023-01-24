import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';
import { NavList, NavItem } from './Navigation.styled';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <NavList>
        {isLoggedIn && (
          <>
            <NavItem>
              <NavLink to="/">Головна</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contacts">Книга контактів</NavLink>
            </NavItem>
          </>
        )}
      </NavList>
    </>
  );
}
