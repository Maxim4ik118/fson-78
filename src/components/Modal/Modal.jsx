import React from 'react';
import PropTypes from 'prop-types';

import { StyledModal, StyledOverlay } from './styled';

class Modal extends React.Component {
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onCloseModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <StyledModal>
          <button onClick={this.props.onCloseModal}>&times;</button>
          <br />
          {JSON.stringify(this.props.visibleData, null, 2)}
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  visibleData: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;
