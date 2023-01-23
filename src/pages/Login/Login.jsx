import { Box } from 'components/Box/Box';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/Auth-operations';
import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';
// import { Box } from 'components/Box/Box';
// import ContactForm from './ContactForm/ContactForm';
// import {
//   ContactFormTitle,
//   ContactFormSecondTitle,
// } from './ContactFormTitle/ContactFormTitle';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFilter } from './ContactFilter/ContactFilter';
// import { selectContacts } from 'redux/selectors';

// import ContactForm from 'components/ContactForm/ContactForm';
// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
// import { ContactList } from 'components/ContactList/ContactList';
// import {
//   ContactFormTitle,
//   ContactFormSecondTitle,
// } from 'components/ContactFormTitle/ContactFormTitle';
import {
  LoginTitle,
  LoginForm,
  LoginLable,
  LoginInput,
  LoginButton,
} from './Login.styled';

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    console.log('name', name, 'value', value);
    switch (name) {
      // case 'name':
      //   return setName(value);
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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box p={30}>
      <LoginTitle>Сторінка логінізації</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginLable>Пошта</LoginLable>
        <LoginInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></LoginInput>
        <LoginLable>Пароль</LoginLable>
        <LoginInput
          type="text"
          name="password"
          value={password}
          onChange={handleChange}
        ></LoginInput>
        <LoginButton type="submit">Вхід</LoginButton>
      </LoginForm>
    </Box>
  );
}
