import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/Auth-operations';
import {
  LoginWrapper,
  LoginTitle,
  LoginForm,
  LoginLable,
  LoginInput,
  LoginInputPassword,
  LoginButton,
  LoginButtonIcon,
  LoginInputPasswordWrapper,
  LoginButtonIconWrapper,
} from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  const visibilityIcons = document.querySelector('div form div div');
  const passwordInput = document.querySelector('form .input-password-login');

  const handleIconPasswordClick = () => {
    visibilityIcons.classList.toggle('active');

    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  };

  return (
    <>
      <LoginTitle>Увійдіть або зареєструйтеся</LoginTitle>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLable>Пошта</LoginLable>
          <LoginInput
            type="email"
            name="email"
            value={email}
            placeholder="Введіть пошту"
            required
            onChange={handleChange}
          ></LoginInput>
          <LoginLable>Пароль</LoginLable>
          <LoginInputPasswordWrapper>
            <LoginInputPassword
              className="input-password-login"
              type="password"
              name="password"
              value={password}
              placeholder="Введіть пароль"
              required
              onChange={handleChange}
            ></LoginInputPassword>
            <LoginButtonIconWrapper>
              <LoginButtonIcon size={25} onClick={handleIconPasswordClick} />
            </LoginButtonIconWrapper>
          </LoginInputPasswordWrapper>
          <LoginButton type="submit">Вхід</LoginButton>
        </LoginForm>
      </LoginWrapper>
    </>
  );
}
