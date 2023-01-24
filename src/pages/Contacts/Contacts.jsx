import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from 'components/Box/Box';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { ContactList } from 'components/ContactList/ContactList';
import {
  ContactFormTitle,
  ContactFormSecondTitle,
} from 'components/ContactFormTitle/ContactFormTitle';
import { fetchContacts } from 'redux/contacts/Contacts-operations';
import { selectContacts } from 'redux/contacts/Contacts-selectors';

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
        height={720}
        p={20}
        bg="rgba(247, 242, 242, 0.3)"
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
