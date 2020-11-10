import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 14px;
  .linkedin__title {
    align-items: center;
    display: grid;
    font-size: 14px;
    grid-column-gap: 12px;
    grid-template-columns: 40px auto;
    grid-template-rows: auto auto;
    margin-bottom: 14px;

    & > .linkedin__logo {
      grid-area: 1/1/-1/1;
      width: 40px;
    }

    & > .linkedin__date {
      font-weight: normal;
      color: #828282;
      font-size: 14px;
    }
  }

  & > .linkedin__post {
    font-size: 14px;
  }
`
