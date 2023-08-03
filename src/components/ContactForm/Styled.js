import styled from 'styled-components';

export const StyledContactForm = styled.form`
  display: block;
  background: #fff;
  max-width: 600px;
  margin: 0 auto 40px;
  border: 1px solid black;
  padding: 15px;
  .input-group {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin-bottom: 15px;
    .name {
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 22px;
    }
  }
`;
