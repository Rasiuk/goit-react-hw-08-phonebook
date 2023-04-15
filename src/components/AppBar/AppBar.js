import { Navigation } from 'components/Navigation/Navigation';
import { Header, Title } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Title>Сontact book</Title>
      <Navigation></Navigation>
    </Header>
  );
};
