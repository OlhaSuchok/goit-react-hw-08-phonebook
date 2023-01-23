import { useSelector, useDispatch } from 'react-redux';
import { FaUserCircle } from 'react-icons/fa';

import { filterContactsAction } from 'redux/filters/filterSlice';
import { selectUserName } from 'redux/auth/Auth-selectors';
import { logOut } from 'redux/auth/Auth-operations';
import {
  UserMenuErapper,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <UserMenuErapper>
      {/* <img alt="Фото користувача"></img> */}
      <FaUserCircle />
      <UserMenuText>Вітаю, {name}!</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </UserMenuButton>
    </UserMenuErapper>
  );
}
