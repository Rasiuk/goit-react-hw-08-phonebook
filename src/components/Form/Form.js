// import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
// import { Form, Field, Label, Section, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/contactsSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, TextField, Button, Container } from '@mui/material';
export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const handleChange = evt => {
    const inputName = evt.target.name;

    switch (inputName) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'number':
        setNumber(evt.target.value);
        break;
      default:
        return '';
    }
  };
  const onSubmit = evt => {
    const newContact = { name, number };

    const existingContact = contacts.find(contact => contact.name === name);
    if (existingContact) {
      return toast(`${name} is already in contacts`);
    }

    dispatch(addContact(newContact));
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={onSubmit}
        noValidate
        sx={{ mt: 1, width: 400 }}
      >
        <TextField
          onChange={handleChange}
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          value={name}
          name="name"
          autoComplete="name"
          autoFocus
        />
        <TextField
          onChange={handleChange}
          margin="normal"
          required
          value={number}
          type="tel"
          fullWidth
          name="number"
          label="Number"
          id="number"
        />

        <Button
          onSubmit={onSubmit}
          type="submit"
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2 }}
        >
          Add contact
        </Button>
      </Box>
      {/* <Formik initialValues={(name, number)} onSubmit={onSubmit}>
        <Form>
          <Label>
            Name
            <Field
              onChange={handleChange}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" />
          </Label>

          <Label>
            Number
            <Field
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="phone" />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
      </Formik> */}
    </Container>
  );
};
