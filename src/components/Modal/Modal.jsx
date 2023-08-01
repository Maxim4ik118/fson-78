import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledModal, StyledOverlay } from './styled';

// а чому ми не можем залишити просто import react from …, а потрібно окремо добавити в {}?

const Modal = ({ visibleData, onCloseModal }) => {
  const [dataType, setDataType] = useState('emails');
  // const btnEmailsRef = useRef();
  // const btnUsersRef = useRef();

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
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  return (
    <StyledOverlay onClick={handleOverlayClick}>
      <StyledModal>
        <button onClick={onCloseModal}>&times;</button>
        <br />
        <div>
          <button
            className={`tab-btn ${dataType === 'emails' ? 'active' : ''}`}
            onClick={() => {
              setDataType('emails');
              // console.log(window.getComputedStyle(btnEmailsRef.current).backgroundColor);
            }}
            // ref={btnEmailsRef}
            type="button"
          >
            Emails
          </button>
          <button
            className={`tab-btn ${dataType === 'users' ? 'active' : ''}`}
            onClick={() => setDataType('users')}
            type="button"
            // ref={btnUsersRef}
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
        {!Array.isArray(visibleData) && JSON.stringify(visibleData, null, 2)}
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
