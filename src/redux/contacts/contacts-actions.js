import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');
export const handleChange = createAction('contacts/handleChange');
