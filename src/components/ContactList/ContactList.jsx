import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { deleteContact } from 'redux/contacts/Contacts-operations';
import { fetchContacts } from 'redux/contacts/Contacts-operations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectError,
} from 'redux/contacts/Contacts-selectors';

import {
  ContactListItem,
  ContactsList,
  ContactListButtonDelete,
  ContactListTextWrapper,
  ContactListItemName,
  ContactListItemPhone,
  MdDeleteOutlineIcons,
} from './ContactList.styled';

export function ContactList() {
  const dispatch = useDispatch();
  const isloading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const visibleContacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {error && <ErrorMessage />}
      {visibleContacts.map(item => (
        <ContactListItem key={item.id}>
          <ContactListTextWrapper>
            <ContactListItemName>{item.name}</ContactListItemName>
            <ContactListItemPhone>{item.number}</ContactListItemPhone>
          </ContactListTextWrapper>
          <ContactListButtonDelete
            type="button"
            onClick={() => dispatch(deleteContact(item.id))}
          >
            <MdDeleteOutlineIcons size={34} />
          </ContactListButtonDelete>
        </ContactListItem>
      ))}
      {isloading && !error && <Loader />}
    </ContactsList>
  );
}
