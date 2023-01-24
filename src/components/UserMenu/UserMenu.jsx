import { useSelector, useDispatch } from 'react-redux';
import { selectUserEmail } from 'redux/auth/Auth-selectors';
import { logOut } from 'redux/auth/Auth-operations';
import {
  UserMenuErapper,
  UserMenuText,
  UserMenuButton,
  FaUserCircleIcon,
} from './UserMenu.styled';

export function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectUserEmail);

  return (
    <UserMenuErapper>
      <FaUserCircleIcon size={30} />
      <UserMenuText>{email}</UserMenuText>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        Вийти
      </UserMenuButton>
    </UserMenuErapper>
  );
}
