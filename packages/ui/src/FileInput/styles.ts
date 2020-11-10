import styled from 'styled-components'
import { Breakpoints } from '../assets/styles/token'

export const Container = styled.form`
  border: 1px dashed #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  grid-gap: 16px;
  place-items: center;
  background: white;

  @media (max-width: ${Breakpoints.md}px) {
    .hide-mobile {
      display: none;
    }
  }
`

export const Message = styled.span`
  font-size: 16px;
  color: #828282;
`
