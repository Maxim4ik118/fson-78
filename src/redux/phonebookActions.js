import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction(
  'phonebook/addContact',
  (contactData) => {
    return {
      payload: {
        id: nanoid(),
        ...contactData,
      },
    };
  }
);
export const deleteContact = createAction('phonebook/deleteContact');
export const setFilterTerm = createAction('phonebook/setFilterTerm');
export const incrementCounter = createAction('phonebook/incrementCounter');
