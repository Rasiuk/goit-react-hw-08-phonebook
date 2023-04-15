import { List } from '@mui/material';
import { ListItems } from './ListItem';
// import { List } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filteredQuery = useSelector(getFilter);

  const filteredContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredQuery.toLowerCase())
  );
  return (
    <List>
      {filteredContact.map(contact => {
        return <ListItems key={contact.id} contacts={contact} />;
      })}
    </List>
  );
};
