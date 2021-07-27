import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Container from './components/Container';
import Filter from './components/Filter';
import styles from './App.module.css';
import Loader from './components/Loader';
import { getLoading } from './redux/contacts/contacts-selectors';

class App extends Component {
  render() {
    const { isLoadingContacts } = this.props;
    return (
      <Container>
        <h1 className={styles.main_header}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.header}>- Contacts -</h2>
        <Filter />
        <ContactList />
        {isLoadingContacts && <Loader />}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
});

export default connect(mapStateToProps)(App);
