import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #949494;
  padding: 0 12px;
  height: 42px;
  border-radius: 2px;
  background: white;
  flex: 1;

  & > input {
    width: 100%;
    border: none;
    outline: none;
  }
`

export const Icon = styled.img`
  margin-right: 10px;
`
