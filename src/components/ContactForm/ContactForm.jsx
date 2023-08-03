import { useState } from 'react';
import { PropTypes } from 'prop-types';

import { StyledContactForm } from './Styled';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
}

const ContactForm = ({addContact}) => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE)

  const handleInputsChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: formData.name,
      number: formData.number,
    };

    addContact(newContact);
    setFormData({ number: '', name: '' });
  };

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <label className="input-group">
        <span className="name">Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={formData.name}
          onChange={handleInputsChange}
          required
        />
      </label>
      <label className="input-group">
        <span className="name">Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={formData.number}
          onChange={handleInputsChange}
          required
        />
      </label>

      <button type="submit">Add contact</button>
    </StyledContactForm>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
