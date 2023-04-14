import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <ul>
      <NavLink to="/">Home </NavLink>
      <NavLink to="/contacts">Contacts </NavLink>
    </ul>
  );
};
