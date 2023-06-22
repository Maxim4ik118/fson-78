import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  margin: 20px auto 25px;
  gap: 16px;

  .form-label {
    display: flex;
    gap: 10px;
  }
  .radio-group {
    display: flex;
    align-items: baseline;
    gap: 10px;
  }

  .form-btn {
    border: none;
    background: #000;
    color: #fff;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
  }
`;