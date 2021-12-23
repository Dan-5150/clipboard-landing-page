import React from "react";
import styled, { css } from 'styled-components';

const RoundedButton = styled.button`
  color: white !important;
  border-radius: 10rem;
  font-weight: 600;
  padding: 0.75rem 1.8rem;
  margin: 0.6rem 0.3rem;
  font-size: 0.9rem;
  min-width: 14rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  ${props => props.color === 'blue' && css`
    background-color: var(--light-blue);
    border: 1px solid var(--light-blue);
    box-shadow: 0px 2px 6px 0px rgba(97, 115, 255, 0.5), inset 0px -3px 0px -1px var(--light-blue-hover-dark) !important;

    &:hover {
      background-color: var(--light-blue-hover-light);
      border-color: var(--light-blue-hover-light);
    }
  `}

  ${props => props.color === 'cyan' && css`
    background-color: var(--strong-cyan);
    border: 1px solid var(--strong-cyan);
    box-shadow: 0px 2px 6px 0px rgba(38, 186, 164, 0.5), inset 0px -3px 0px -1px var(--strong-cyan-hover-dark) !important;

    &:hover {
      background-color: var(--strong-cyan-hover-light);
      border-color: var(--strong-cyan-hover-light);
    }
  `}
`;

interface ButtonProps {
  text: string;
  color: string;
}

const Button = (props: ButtonProps) => {
  const { text, color } = props;

  return (
    <RoundedButton className="btn" color={color}>
      {text}
    </RoundedButton>
  );
}

export default Button;
