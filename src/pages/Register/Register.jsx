import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/Auth-operations';
import {
  RegisterWrapper,
  RegisterTitle,
  RegisterForm,
  RegisterLable,
  RegisterInput,
  LoginInputPassword,
  RegisterButton,
  RegisterButtonIcon,
  RegisterButtonIconWrapper,
  RegisterInputLoginWrapper,
} from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const visibilityIcons = document.querySelector('div form div div');
  const passwordInput = document.querySelector('form .input-password-register');

  const handleIconPasswordClick = () => {
    visibilityIcons.classList.toggle('active');

    if (passwordInput.getAttribute('type') === 'password') {
      passwordInput.setAttribute('type', 'text');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    console.log('name', name, 'value', value);
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <RegisterTitle>Реєстрація користувача</RegisterTitle>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterLable>Ім'я</RegisterLable>
          <RegisterInput
            type="text"
            name="name"
            value={name}
            placeholder="Введіть ім'я"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пошта</RegisterLable>
          <RegisterInput
            type="email"
            name="email"
            value={email}
            placeholder="Введіть пошту"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пароль</RegisterLable>
          <RegisterInputLoginWrapper>
            <LoginInputPassword
              className="input-password-register"
              type="password"
              name="password"
              value={password}
              placeholder="Введіть пароль"
              required
              onChange={handleChange}
            ></LoginInputPassword>
            <RegisterButtonIconWrapper className="register-icon-wrapper">
              <RegisterButtonIcon size={25} onClick={handleIconPasswordClick} />
            </RegisterButtonIconWrapper>
          </RegisterInputLoginWrapper>
          <RegisterButton type="submit">Зареєструватися</RegisterButton>
        </RegisterForm>
      </RegisterWrapper>
    </>
  );
}
