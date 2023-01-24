import React from 'react';
import { AuthList, AuthListItem, AuthNavLink } from './AuthNav.styled';

export function AuthNav() {
  return (
    <AuthList>
      <AuthListItem>
        <AuthNavLink to="/register">Реєстрація</AuthNavLink>
      </AuthListItem>
      <AuthListItem>
        <AuthNavLink to="/login">Логін</AuthNavLink>
      </AuthListItem>
    </AuthList>
  );
}
