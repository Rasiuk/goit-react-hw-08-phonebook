import { Section } from './Default.styled';
import { Toast } from './Toastyfy/ToastContainer';
import { Route, Routes } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout';
import SignIn from 'pages/Login';
import SignUp from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refresh } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Home } from 'pages/Home';
import { ThemeProvider, createTheme } from '@mui/material';
import { purple } from '@mui/material/colors';

export const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#f44336',
      },
    },
  });
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <ThemeProvider theme={theme}>
        <Section>
          <Toast />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute component={<Contacts />} redirectTo="/login" />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={<SignIn />}
                    redirectTo="/contacts"
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    component={<SignUp />}
                    redirectTo="/contacts"
                  />
                }
              />
            </Route>
          </Routes>
        </Section>
      </ThemeProvider>
    )
  );
};
