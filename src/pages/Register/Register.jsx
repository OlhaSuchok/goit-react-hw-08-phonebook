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
} from './Register.styled';

export default function Register() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          <LoginInputPassword
            type="password"
            name="password"
            value={password}
            placeholder="Введіть пароль"
            required
            onChange={handleChange}
          ></LoginInputPassword>
          <RegisterButtonIcon size={25} />
          <RegisterButton type="submit">Зареєструватися</RegisterButton>
        </RegisterForm>
      </RegisterWrapper>
    </>
  );
}
