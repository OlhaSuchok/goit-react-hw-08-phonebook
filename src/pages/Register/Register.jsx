import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/Auth-operations';
import {
  RegisterWrapper,
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
    <>
      <RegisterTitle>Реєстрація користувача</RegisterTitle>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterLable>Ім'я</RegisterLable>
          <RegisterInput
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пошта</RegisterLable>
          <RegisterInput
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пароль</RegisterLable>
          <RegisterInput
            type="text"
            name="password"
            value={password}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterButton type="submit">Зареєструватися</RegisterButton>
        </RegisterForm>
      </RegisterWrapper>
    </>
  );
}
