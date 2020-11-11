import React from 'react'
import InstagramLogoSVG from '../../assets/images/instagram-logo.svg'
import HearthSVG from '../../assets/icons/hearth.svg'
import CommentBaloonSVG from '../../assets/icons/comment-ballon.svg'
import MarkSVG from '../../assets/icons/mark.svg'
import { Container } from './styles'
import { InstagramProps } from './types'

const ComponentSocialInstagram: React.FC<InstagramProps> = ({
  post,
  image,
  username
}) => {
  return (
    <Container>
      <div className="instagram__header">
        <img
          className="instagram__logo"
          src={InstagramLogoSVG}
        />
        <span>{username}</span>
      </div>
      {image && (
        <img className="instagram__image" src={image} />
      )}
      <div className="instagram__footer">
        <div className="instagram__actions">
          <div>
            <img src={HearthSVG} />
            <img src={CommentBaloonSVG} />
          </div>
          <img src={MarkSVG} />
        </div>
        <div
          className="instagram__post"
          dangerouslySetInnerHTML={{
            __html: post
          }}
        />
      </div>
    </Container>
  )
}

export default ComponentSocialInstagram
