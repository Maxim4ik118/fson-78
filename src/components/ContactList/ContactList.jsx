import React from 'react';

import PropTypes from 'prop-types';

import { StyledContactList } from './Styled';

const ContactList = ({ contacts, onDelete }) => {

  return (
    <StyledContactList>
      <ul className="contacts">
        {contacts.length === 0 && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <li key={id} className="contact">
                <span className="contact-name">{name}</span>:&nbsp;{number}
                <button className="delete-contact-btn" type="button" onClick={() => onDelete(id)}>
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </StyledContactList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
