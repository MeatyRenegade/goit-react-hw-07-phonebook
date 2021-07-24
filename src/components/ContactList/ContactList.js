import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-actions';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.ContactList}>
    {contacts.map(({ id, name, number }) => (
      <li className={styles.ContactList_item} key={id}>
        <p className={styles.ContactList_text}>{name}</p>
        <p className={styles.ContactList_text}>{number}</p>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};

const handleFilteredContacts = (items, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: handleFilteredContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
