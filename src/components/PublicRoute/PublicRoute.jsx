import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';

export default function PublicRoute({
  element,
  redirectTo = '/',
  restricted = false,
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn && restricted ? <Navigate to={redirectTo} /> : element;
}
