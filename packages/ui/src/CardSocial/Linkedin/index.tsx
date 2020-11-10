import React from 'react'
import Header from './Header'
import { Actions, Comments, Img } from './styles'
import ThumbsUpSVG from '../../assets/icons/thumbs-up.svg'
import CommentSVG from '../../assets/icons/comment.svg'
import ShareSVG from '../../assets/icons/share.svg'
import { CardLinkedindProps } from './types'

const ComponentSocialLinkedin: React.FC<CardLinkedindProps> = ({
  image,
  date,
  userName,
  post
}) => {
  return (
    <div>
      <Header userName={userName} date={date} post={post} />
      <Img src={image} />
      <Comments>5 comentários</Comments>
      <Actions>
        <img src={ThumbsUpSVG} />
        <img src={CommentSVG} />
        <img src={ShareSVG} />
      </Actions>
    </div>
  )
}

export default ComponentSocialLinkedin
