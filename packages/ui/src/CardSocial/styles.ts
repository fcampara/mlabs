import styled from 'styled-components'
import { Breakpoints } from '../assets/styles/token'

export const Container = styled.div`
  max-width: 370px;
  width: max-content;
  background-color: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;

  @media (max-width: ${Breakpoints.sm}px) {
    max-width: 320px;
  }
`
