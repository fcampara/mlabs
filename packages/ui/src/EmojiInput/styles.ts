import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  & > .popover {
    position: absolute;
    right: 0;
  }

  .emoji__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .emoji__item {
    width: 16px;
    height: 16px;
  }
`

export const Textarea = styled.div`
  width: 100%;
  padding: 11px 42px 11px 18px;
  border: 1px solid #949494;
  box-sizing: border-box;
  border-radius: 4px;
  background: white;
  min-height: 150px;

  &:empty:before {
    content: '${({ placeholder }) => placeholder}';
    font-size: 14px;
    color: #4f4f4f;
  }
`
