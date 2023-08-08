import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 22px;
  padding: 15px 25px;
  margin-right: 20px;
  margin-top: 20px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  background-color: darkblue;
  color: #fff;
  display: inline-block;
  text-decoration: none;

  transition: all 0.3s;

  &.active {
    background-color: yellow;
    color: black;
    border-color: yellowgreen;
  }
`;
