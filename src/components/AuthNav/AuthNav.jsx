// import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { filterContactsAction } from 'redux/filters/filterSlice';
// import { selectContactsFilter } from 'redux/contacts/Contacts-selectors';
import React from 'react';
import { AuthList, AuthListItem } from './AuthNav.styled';

export function AuthNav() {
  // const contactsFilter = useSelector(selectContactsFilter);
  // const dispatch = useDispatch();

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
