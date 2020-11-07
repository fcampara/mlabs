import styled, { css } from 'styled-components'
import { Colors } from '../styles/token'

const outline = css`
  background: ${Colors.white};
  border: 1px solid ${Colors.primary};
  border-radius: 4px;
  color: ${Colors.primary};

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

  &:hover {
    color: ${Colors.secondary};
    background: ${Colors['secondary-light']};
  }
`

const contained = css`
  background: ${Colors.transparent};
  color: ${Colors.primary};

  &:hover {
    background: ${Colors['primary-light']}
  }
`

export const Button = styled.button`
  cursor: pointer;
  color: ${Colors.white};
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  background: ${Colors.primary};
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  width: 100%;
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
  box-sizing: border-box;
  width: 184px;

  &:hover {
    color: ${Colors.primary};
    background: ${Colors['primary-light']}
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

  &.full-width {
    width: 100%;
  }
`
