import { FaUserCircle } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/auth/Auth-selectors';
import { logOut } from 'redux/auth/Auth-operations';
import {
  UserMenuErapper,
  UserMenuText,
  UserMenuButton,
} from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <UserMenuErapper>
      <FaUserCircle />
      <UserMenuText>{email}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </UserMenuButton>
    </UserMenuErapper>
  );
}
