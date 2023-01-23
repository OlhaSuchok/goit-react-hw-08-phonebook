import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filterContactsAction } from 'redux/filters/filterSlice';
import { selectContactsFilter } from 'redux/contacts/Contacts-selectors';
import React from 'react';

import { NavList, NavItem } from './Navigation.styled';

export function Navigation() {
  const contactsFilter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  return (
    <NavList>
      <NavItem>
        <NavLink to="/">Головна</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/contacts">Книга контактів</NavLink>
      </NavItem>
    </NavList>
  );
}
