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
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && <Filter />}
      {!isLoading && <ContactList />}
    </div>
  );
};
