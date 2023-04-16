import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';
import { Typography } from '@mui/material';

export const AppBar = () => {
  return (
    <Header>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        color="primary"
        mb={2}
      >
        Сontact book
      </Typography>
      <Navigation></Navigation>
    </Header>
  );
};
