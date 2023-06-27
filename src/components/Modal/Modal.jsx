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
    /*
    Спрацьовує після того, як відмалювалась розмітка компоненту.
          Коли його використовують:
          1. Коли нам потрібно ВСТАНОВИТИ глобальні слухачі подій addEventListener
          2. Коли нам потрібно зробити HTTP запит
          3. Коли дістати дані з localStorage
          4. Коли ми встановлємо таймери, або інтервали (setTimeout, setInterval)
    */

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    /*
    Спрацьовує перед тим, як реакт повністю видалить компонент з розмітки(DOM).
     Коли його використовують:
          1. Коли нам потрібно ПРИБРАТИ глобальні слухачі подій removeEventListener
          2. Коли нам потрібно ВІДХИЛИТИ HTTP запит
          3. Коли ми ОЧИЩАЄМО таймери, або інтервали (clearTimeout, clearInterval)
    */
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
