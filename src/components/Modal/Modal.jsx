import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledModal, StyledOverlay } from './styled';

// а чому ми не можем залишити просто import react from …, а потрібно окремо добавити в {}?

const Modal = ({ visibleData, onCloseModal }) => {
  const [dataType, setDataType] = useState('emails'); // "emails" | "users"

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // componentWillUnmount
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]); // componentDidMount

  useEffect(() => {
    console.log("Current dataType: ", dataType);
  }, [dataType]) // componentDidMount + componentDidUpdate

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <button onClick={onCloseModal}>&times;</button>
        <br />
        <div>
          <button
            className={`tab-btn ${dataType === 'emails' ? 'active' : ''}`}
            onClick={() => setDataType('emails')}
            type="button"
          >
            Emails
          </button>
          <button
            className={`tab-btn ${dataType === 'users' ? 'active' : ''}`}
            onClick={() => setDataType('users')}
            type="button"
          >
            Users
          </button>
          <button
            className={`tab-btn ${dataType === 'comments' ? 'active' : ''}`}
            onClick={() => setDataType('comments')}
            type="button"
          >
            Comments
          </button>
        </div>

        <h2>Active dataType: {dataType}</h2>
        {dataType === 'emails' && (
          <ul>
            {Array.isArray(visibleData) &&
              visibleData.map(comment => (
                <li key={comment.id}>{comment.email}</li>
              ))}{' '}
          </ul>
        )}
        {dataType === 'users' && (
          <ul>
            {Array.isArray(visibleData) &&
              visibleData.map(comment => (
                <li key={comment.id}>{comment.name}</li>
              ))}{' '}
          </ul>
        )}
        {dataType === 'comments' && (
          <ul>
            {Array.isArray(visibleData) &&
              visibleData.map(comment => (
                <li key={comment.id}>{comment.body}</li>
              ))}{' '}
          </ul>
        )}
      </StyledModal>
    </StyledOverlay>
  );
};

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
