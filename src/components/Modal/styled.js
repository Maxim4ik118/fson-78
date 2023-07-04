import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  .tab-btn.active {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
  .tab-btn {
    background-color: beige;
    color: #000;
  }
`;
export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 15px;
  padding: 25px;
  max-height: 550px;
  overflow-y: auto;
`;
