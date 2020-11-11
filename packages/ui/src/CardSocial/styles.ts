import styled from 'styled-components'
import { Breakpoints } from '../assets/styles/token'

export const Container = styled.div`
  min-width: 370px;
  background-color: white;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;

  @media (max-width: ${Breakpoints.sm}px) {
    min-width: 320px;
  }
`
