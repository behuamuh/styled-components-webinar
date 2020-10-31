import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-block;
  padding: 12px;
  border: none;
  color: white;
  font-size: 14px;
  line-height: 1.4;
  cursor: pointer;
  transition: opacity 2s ease-in-out;

  :hover {
    opacity: 0.4;
  }

  :active {
    opacity: 1;
  }
`;

export const Button = styled.button`
  ${buttonStyles}
  background-color: ${({ color = 'red' }) => color};
`;
