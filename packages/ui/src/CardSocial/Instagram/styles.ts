import styled from 'styled-components'

export const Container = styled.div`
  & > .instagram__header {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    padding: 14px;
  }

  & > .instagram__logo {
    width: 40px;
  }

  & > .instagram__image {
    max-width: 100%;
  }

  & > .instagram__footer {
    padding: 9px 16px;

    & > .instagram__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div {
        display: flex;
        grid-gap: 18px;
      }

      & > img {
        width: 22px;
        height: 21px;
      }
    }

    .instagram__post {
      color: #4f4f4f;
      font-size: 14px;
      margin-top: 12px;
    }
  }
`
