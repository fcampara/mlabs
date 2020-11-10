import styled from 'styled-components'

export const Wrapper = styled.div<{ left: number }>`
  position: relative;
  display: inline-block;

  & > .popover__container {
    border: 1px solid #828282;
    box-shadow: 1px 2px 14px 0px rgba(0, 0, 0, 0.2);
    position: absolute;
    left: ${({ left }) => `${left * -1}px`};
    visibility: hidden;
    background-color: white;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    z-index: 1;
  }

  & > .popover__container::after {
    content: '';
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: #fff;
    left: 89%;
    top: -2px;
    z-index: 400;
    border-top: 1px solid #828282;
    border-left: 1px solid #828282;
  }

  &:hover > .popover__container {
    visibility: visible;
    opacity: 1;
  }
`
