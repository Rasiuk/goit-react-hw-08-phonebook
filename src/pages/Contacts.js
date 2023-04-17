import { Typography } from '@mui/material';
import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getError, getLoadin } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoadin);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Typography component="h1" variant="h5" align="center" color="primary">
        Phonebook
      </Typography>

      <ContactForm />
      <Typography component="h1" variant="h6" align="center" color="primary">
        Contacts
      </Typography>

      {isLoading && !error && <b>Request in progress...</b>}
      <Filter />
      {!isLoading && <ContactList />}
    </div>
  );
};
