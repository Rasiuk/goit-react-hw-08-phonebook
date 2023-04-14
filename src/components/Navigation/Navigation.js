import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <ul>
      <NavLink to="/">Home </NavLink>
      {isLoggedIn ? (
        <div>
          <NavLink to="/contacts">Contacts </NavLink>
          <UserMenu></UserMenu>
        </div>
      ) : (
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </ul>
  );
};
