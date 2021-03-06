import styled, { css } from 'styled-components'
import { Colors } from '../assets/styles/token'

const selected = css`
  color: white;
  background: ${Colors['secondary-gradient']};
`

export const IconButton = styled.button`
  width: 33px;
  height: 33px;
  font-size: 16px;
  border: 1px solid ${Colors.border};
  background: ${Colors.transparent};
  border-radius: 50%;
  cursor: pointer;
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
  overflow: hidden;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover&:not(:disabled)&:not(.icon-button__selected) {
    background: ${Colors['secondary-light']};
    border: 1px solid ${Colors['secondary-border']};
    color: ${Colors['secondary-border']};
  }

  &.icon-button__selected {
    ${selected}
  }

  &:disabled {
    color: ${Colors.gray};
    background: ${Colors.disabled};
    cursor: auto;
  }
`
