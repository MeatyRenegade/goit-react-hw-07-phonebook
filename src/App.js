import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
import Filter from './components/Filter';
import styles from './App.module.css';

const App = () => {
  return (
    <Container>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.header}>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
