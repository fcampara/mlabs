import React, { useMemo } from 'react'
import { HeaderContainer } from './styles'
import LinkedinSVG from '../../../assets/images/linkedin-logo.svg'
import { LinkedinHeaderProps } from '../types'
import { formatDatePTBR } from '../../../DateInput/utils'

const ComponentLinkedinHeader: React.FC<LinkedinHeaderProps> = ({
  post,
  userName,
  date
}) => {
  const formattedDate = useMemo(
    () => formatDatePTBR(date, 'long'),
    []
  )
  return (
    <HeaderContainer>
      <div className="linkedin__title">
        <img className="linkedin__logo" src={LinkedinSVG} />
        <span>{userName}</span>
        <span className="linkedin__date">
          {formattedDate}
        </span>
      </div>
      <span className="linkedin__post">{post}</span>
    </HeaderContainer>
  )
}

export default ComponentLinkedinHeader
