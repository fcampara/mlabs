import React, { useEffect, useRef, useState } from 'react'
import { Wrapper } from './styles'
import { PopoverProps } from './types'

const ComponentPopover: React.FC<PopoverProps> = ({
  children
}) => {
  const [
    popoverContainerWidth,
    setpopoverContainerWidth
  ] = useState(0)
  const [childrenWidth, setChildrenWidth] = useState(0)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const childrenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setpopoverContainerWidth(
      tooltipRef.current?.offsetWidth || 0
    )
  }, [tooltipRef])

  useEffect(() => {
    setChildrenWidth(childrenRef.current?.offsetWidth || 0)
  }, [childrenRef])

  return (
    <Wrapper
      className="popover"
      left={popoverContainerWidth - childrenWidth}
    >
      <div ref={childrenRef}>{children[0]}</div>
      <span className="popover__container" ref={tooltipRef}>
        {children[1]}
      </span>
    </Wrapper>
  )
}

export default ComponentPopover
