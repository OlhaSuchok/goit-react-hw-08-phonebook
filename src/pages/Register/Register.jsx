import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import { register } from 'redux/auth/Auth-operations'; 
import {
  RegisterTitle,
  RegisterForm,
  RegisterLable,
  RegisterInput,
  RegisterButton,
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
    <Box p={30}>
      <RegisterTitle>Сторінка реєстрації</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterLable>Ім'я</RegisterLable>
        <RegisterInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        ></RegisterInput>
        <RegisterLable>Пошта</RegisterLable>
        <RegisterInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></RegisterInput>
        <RegisterLable>Пароль</RegisterLable>
        <RegisterInput
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        ></RegisterInput>
        <RegisterButton type="submit">Зареєструватися</RegisterButton>
      </RegisterForm>
    </Box>
  );
}
