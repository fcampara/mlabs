import styled from 'styled-components'

export const Dialog = styled.dialog`
  background: #fafafa;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
  max-width: 880px;
  background: white;
  top: 50%;
  bottom: 50%;

  &::backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.1);
  }
`

export const Container = styled.section`
  background: blue;
  width: 100vw;
  height: 100vh;
`
