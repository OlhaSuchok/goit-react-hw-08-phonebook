import { Box } from 'components/Box/Box';
import { useSelector, useDispatch } from 'react-redux';
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
// import { selectContacts } from 'redux/contacts/Contacts-selectors';

// import ContactForm from 'components/ContactForm/ContactForm';
// import { ContactFilter } from 'components/ContactFilter/ContactFilter';
// import { ContactList } from 'components/ContactList/ContactList';
// import {
//   ContactFormTitle,
//   ContactFormSecondTitle,
// } from 'components/ContactFormTitle/ContactFormTitle';
import {
  RegisterTitle,
  RegisterForm,
  RegisterLable,
  RegisterInput,
  RegisterButton,
} from './Register.styled';
// import { selectUserName } from 'redux/auth/Auth-selectors';
// import { selectUserEmail } from 'redux/auth/Auth-selectors';
// import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';
import { register } from 'redux/auth/Auth-operations';
import { useState } from 'react';

export default function Register() {
  const dispatch = useDispatch();
  // const name = useSelector(selectUserName);
  // const email = useSelector(selectUserEmail);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

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
