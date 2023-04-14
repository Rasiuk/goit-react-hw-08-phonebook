import PropTypes from 'prop-types';
import { ButtonDelete, Item, Name, Number } from './ContactsList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
// import { deleteContact } from 'redux/contactsSlice';
export const ListItem = ({ contacts: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
      <Name>{name}</Name>
      <Number>{phone}</Number>
      <ButtonDelete onClick={() => dispatch(deleteContact(id))} type="button">
        delete
      </ButtonDelete>
    </Item>
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
