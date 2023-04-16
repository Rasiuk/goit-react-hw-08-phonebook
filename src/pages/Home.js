import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Container, Link, Typography } from '@mui/material';
import { useAuth } from 'hooks/useAuth';

export const Home = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" component="h2" color="primary">
        This site was created to create and store telephone contacts.
      </Typography>
      {!isLoggedIn && (
        <Typography variant="h5" component="p" color="primary">
          Register or login to use the app.
        </Typography>
      )}
      <Typography variant="h5" component="p" color="primary">
        The site was created using the library{' '}
        <Link underline="none" href="https://mui.com/">
          Material UI.
        </Link>
      </Typography>
      <Typography variant="h5" component="p" color="primary">
        I wish you good use
        <SentimentSatisfiedAltIcon />{' '}
      </Typography>
    </Container>
  );
};
