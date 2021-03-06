import styled, { css } from 'styled-components'
import { Colors } from '../assets/styles/token'

const outline = css`
  background: ${Colors.transparent};
  border: 1px solid ${Colors.primary};
  border-radius: 4px;
  color: ${Colors.primary};

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.26);
    border-color: rgba(0, 0, 0, 0.26);
  }

  &:hover {
    color: ${Colors.white};
    background: ${Colors.primary};
  }
`

const secondary = css`
  background: ${Colors.secondary};
  border: 1px solid ${Colors.white};
  border-radius: 4px;
  color: ${Colors.white};

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
  }

  &:hover {
    color: ${Colors.secondary};
    background: ${Colors['secondary-light']};
  }
`

const contained = css`
  background: ${Colors.transparent};
  color: ${Colors.primary};
  width: auto;

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.26);
  }

  &:hover {
    background: ${Colors['primary-light']};
  }
`

const small = css`
  height: 36px;
`

export const Button = styled.button`
  cursor: pointer;
  color: ${Colors.white};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  background: ${Colors.primary};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
  width: 184px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:disabled {
    cursor: default;
    pointer-events: none;
    color: rgba(0, 0, 0, 0.26);
    background-color: rgba(0, 0, 0, 0.12);
  }

  &:hover {
    color: ${Colors.primary};
    background: ${Colors['primary-light']};
  }

  &.button--outline {
    ${outline}
  }

  &.button--secondary {
    ${secondary}
  }

  &.button--contained {
    ${contained}
  }

  &.button--small {
    ${small}
  }
`
