import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/Contacts-operations';
import { Box } from 'components/Box/Box';
// import ContactForm from './ContactForm/ContactForm';
// import {
//   ContactFormTitle,
//   ContactFormSecondTitle,
// } from './ContactFormTitle/ContactFormTitle';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFilter } from './ContactFilter/ContactFilter';
import { selectContacts } from 'redux/contacts/Contacts-selectors';

import ContactForm from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  ContactFormTitle,
  ContactFormSecondTitle,
} from 'components/ContactFormTitle/ContactFormTitle';

export default function Contacts() {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <Box
        height={750}
        p={30}
        bg="primary"
        border="2px solid"
        borderColor="border"
        borderRadius={8}
      >
        <ContactFormTitle>PHONEBOOK</ContactFormTitle>
        <ContactForm />
        <ContactFilter />
        <ContactFormSecondTitle>CONTACTS</ContactFormSecondTitle>
        {items && <ContactList />}
      </Box>
    </div>
  );
}
