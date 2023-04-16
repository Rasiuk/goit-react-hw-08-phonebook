// import { Link } from '@mui/material';
import * as React from 'react';

import { Container, ListNav } from './Navigation.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

import { Link as RouterLink } from 'react-router-dom';
// import { StaticRouter } from 'react-router-dom/server';
import Button from '@mui/material/Button';

// const LinkBehavior = React.forwardRef((props, ref) => (
//   <RouterLink ref={ref} to="/" {...props} role={undefined} />
// ));

// function Router(props) {
//   const { children } = props;
//   if (typeof window === 'undefined') {
//     return <StaticRouter location="/">{children}</StaticRouter>;
//   }

//   return <MemoryRouter>{children}</MemoryRouter>;
// }

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Button component={RouterLink} to="/">
        Home
      </Button>
      {isLoggedIn ? (
        <ListNav>
          <Button component={RouterLink} to="/contacts">
            Phonebook
          </Button>
          <UserMenu />
        </ListNav>
      ) : (
        <ListNav>
          <Button component={RouterLink} to="/login">
            Log In
          </Button>
          <Button component={RouterLink} to="/register">
            Sign Up
          </Button>
        </ListNav>
      )}
    </Container>
  );
};
