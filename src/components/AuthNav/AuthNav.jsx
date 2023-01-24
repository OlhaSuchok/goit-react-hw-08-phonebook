import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthList, AuthListItem } from './AuthNav.styled';

export function AuthNav() {
  return (
    <AuthList>
      <AuthListItem>
        <NavLink to="/register">Реєстрація</NavLink>
      </AuthListItem>
      <AuthListItem>
        <NavLink to="/login">Логін</NavLink>
      </AuthListItem>
    </AuthList>
  );
}
