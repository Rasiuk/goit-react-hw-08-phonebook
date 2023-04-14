// import { useState, useEffect } from 'react';
// import { ContactList } from './ContactsList/ContactList';
// import { Filter } from './Filter/Filter';
// import { ContactForm } from './Form/Form';
import { Section } from './Default.styled';
import { useDispatch } from 'react-redux';
// import { getError, getLoadin } from 'redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Toast } from './Toastyfy/ToastContainer';
import { Route, Routes } from 'react-router-dom';
// import { Home } from 'pages/Home';
import { Contacts } from 'pages/Contacts';
import { Layout } from './Layout';
import SignIn from 'pages/Login';
import SignUp from 'pages/Register';

export const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getLoadin);
  // const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Section>
      <Toast />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
        </Route>
      </Routes>
      {/* <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {!isLoading && <Filter />}
      {!isLoading && <ContactList />} */}
    </Section>
  );
};
