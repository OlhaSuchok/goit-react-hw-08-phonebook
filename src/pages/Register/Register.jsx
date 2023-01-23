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
export default function Register() {
  return (
    <Box p={30}>
      <RegisterTitle>Сторінка реєстрації</RegisterTitle>
      <RegisterForm>
        <RegisterLable>Ім'я</RegisterLable>
        <RegisterInput></RegisterInput>
        <RegisterLable>Пошта</RegisterLable>
        <RegisterInput></RegisterInput>
        <RegisterLable>Пароль</RegisterLable>
        <RegisterInput></RegisterInput>
        <RegisterButton type="submit">Зареєструватися</RegisterButton>
      </RegisterForm>
    </Box>
  );
}
