import React, { useMemo } from 'react'
import { HeaderContainer } from './styles'
import LinkedinSVG from '../../../assets/images/linkedin-logo.svg'
import { LinkedinHeaderProps } from '../types'
import { formatDatePTBR } from '../../../DateInput/utils'

const ComponentLinkedinHeader: React.FC<LinkedinHeaderProps> = ({
  post,
  username,
  date
}) => {
  const formattedDate = useMemo(
    () => date && formatDatePTBR(date, 'long'),
    [date]
  )

  return (
    <HeaderContainer>
      <div className="linkedin__title">
        <img className="linkedin__logo" src={LinkedinSVG} />
        <span>{username}</span>
        <span className="linkedin__date">
          {formattedDate}
        </span>
      </div>
      <span
        className="linkedin__post"
        dangerouslySetInnerHTML={{
          __html: post
        }}
      />
    </HeaderContainer>
  )
}

export default ComponentLinkedinHeader
