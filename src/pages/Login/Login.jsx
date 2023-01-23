import { Box } from 'components/Box/Box';
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
  return (
    <Box p={30}>
      <LoginTitle>Сторінка логінізації</LoginTitle>
      <LoginForm>
        <LoginLable>Пошта</LoginLable>
        <LoginInput></LoginInput>
        <LoginLable>Пароль</LoginLable>
        <LoginInput></LoginInput>
        <LoginButton type="submit">Вхід</LoginButton>
      </LoginForm>
    </Box>
  );
}
