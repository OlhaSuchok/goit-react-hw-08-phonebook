import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts } from 'redux/contacts/Contacts-selectors';
import { addContact } from 'redux/contacts/Contacts-operations';
import { nanoid } from 'nanoid';
import {
  ContactFormWrapper,
  ContactFormFieldFirst,
  ContactFormFieldSecond,
  ContactFormButton,
  AiOutlineUserAddIcons,
} from './ContactForm.styled';

export default function ContactForm() {
  const items = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const newContact = { name, number, id: nanoid() };
    const isContact = items.find(item => item.name === newContact.name);

    if (isContact) {
      toast.warn(`${newContact.name} is already in contacts`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch(addContact(newContact));
    }
    setName('');
    setNumber('');
  };

  return (
    <ContactFormWrapper onSubmit={handleSubmit}>
      <ContactFormFieldFirst
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Name"
      />
      <ContactFormFieldSecond
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Number"
      />
      <ContactFormButton type="submit">
        <AiOutlineUserAddIcons size={34} />
      </ContactFormButton>
      <ToastContainer autoClose={5000} style={{ fontSize: '20px' }} />
    </ContactFormWrapper>
  );
}
