import PropTypes from 'prop-types';
// import { ButtonDelete, Item, Name, Number } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import DeleteIcon from '@mui/icons-material/Delete';

import ContactsIcon from '@mui/icons-material/Contacts';
import {
  ListItemAvatar,
  ListItem,
  Avatar,
  ListItemText,
  Button,
} from '@mui/material';
// import { deleteContact } from 'redux/contactsSlice';
export const ListItems = ({ contacts: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: '#f2f3f4' }}>
          {/* <ImageIcon /> */}
          <ContactsIcon color="primary" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={number} />
      <Button
        type="button"
        onClick={() => dispatch(deleteContact(id))}
        size="small"
        variant="outlined"
        startIcon={<DeleteIcon fontSize="small" />}
      >
        Delete
      </Button>
    </ListItem>
    // <Item key={id}>
    //   <Name>{name}</Name>
    //   <Number>{number}</Number>
    //   <ButtonDelete onClick={() => dispatch(deleteContact(id))} type="button">
    //     delete
    //   </ButtonDelete>
    // </Item>
  );
};
ListItem.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
