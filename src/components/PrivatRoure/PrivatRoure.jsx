import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';

export default function PrivatRoute({ element, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectTo} />;
}

