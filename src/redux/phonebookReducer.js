import { createReducer, createSelector } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  incrementCounter,
  setFilterTerm,
} from './phonebookActions';

// state => state.phonebook.contacts
// state => state.phonebook.filter
const initialState = {
  contactsItems: [],
  filter: '',
  counterValue: 0,
};

export default createReducer(initialState, {
  [incrementCounter]: state => {
    state.counterValue = state.counterValue + 1;
  },
  [addContact]: (state, action) => {
    state.contactsItems = [...state.contactsItems, action.payload];
  },
  [deleteContact]: (state, action) => {
    state.contactsItems = state.contactsItems.filter(
      contact => contact.id !== action.payload
    );
  },
  [setFilterTerm]: (state, action) => {
    state.filter = action.payload;
  },
});

export const selectContacts = state => state.phonebook.contactsItems;
export const selectFilter = state => state.phonebook.filter;

export const selectFilteredContacts = createSelector(
  [
    selectFilter, // ""
    selectContacts, // [{}, {}, {}, {}]
  ],
  (filterValue, contacts) => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  }
);

export const selectCounter = state => state.phonebook.counterValue;
