import { Container, ListNav } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <NavLink to="/">Home </NavLink>
      {isLoggedIn ? (
        <ListNav>
          <NavLink to="/contacts">Contacts </NavLink>

          <UserMenu />
        </ListNav>
      ) : (
        <ListNav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </ListNav>
      )}
    </Container>
  );
};
