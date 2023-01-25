import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/Auth-operations';
import {
  LoginWrapper,
  LoginTitle,
  LoginForm,
  LoginLable,
  LoginInput,
  LoginButton,
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
            required
            onChange={handleChange}
          ></LoginInput>
          <LoginLable>Пароль</LoginLable>
          <LoginInput
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          ></LoginInput>
          <LoginButton type="submit">Вхід</LoginButton>
        </LoginForm>
      </LoginWrapper>
    </>
  );
}
