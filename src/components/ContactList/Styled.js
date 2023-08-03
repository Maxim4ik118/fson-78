import styled from 'styled-components';

export const StyledContactList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto 120px;
  max-width: 600px;
  .contacts {
    padding-left: 0;
    list-style: none;

    .contact {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      font-size: 22px;
      border: 1px solid darkblue;
      padding:  8px 5px;
      .contact-name {
        font-weight: 600;
        
      }
      .delete-contact-btn {
        margin-left: auto;
      }
    }
  }
`;
