import { ContactList } from 'components/ContactsList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';
import { useSelector } from 'react-redux';
import { getError, getLoadin } from 'redux/contactsSlice';

export const Contacts = () => {
  const isLoading = useSelector(getLoadin);
  const error = useSelector(getError);
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
