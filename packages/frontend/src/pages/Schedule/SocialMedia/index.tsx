import React from 'react'
import { Card, IconButton } from '@mlabs/ui'
import 'src/pages/Schedule/SocialMedia/styles.css'
import InstagramSVG from 'src/assets/instagram.svg'
import LinkedinSVG from 'src/assets/linkedin.svg'
import YoutubeSVG from 'src/assets/youtube.svg'
import PinterestSVG from 'src/assets/pinterest.svg'
import TwitterSVG from 'src/assets/twitter.svg'
import FacebookSVG from 'src/assets/facebook.svg'

const ComponentSocialMedia: React.FC = () => {
  return (
    <Card title="Redes sociais">
      <div className="schedule__social-media">
        <IconButton>
          <img alt="Icone instagram" src={InstagramSVG} />
        </IconButton>
        <IconButton>
          <img alt="Icone linkedin" src={LinkedinSVG} />
        </IconButton>
        <IconButton disabled>
          <img alt="Icone Youtube" src={YoutubeSVG} />
        </IconButton>
        <IconButton disabled>
          <img alt="Icone Pinterest" src={PinterestSVG} />
        </IconButton>
        <IconButton disabled>
          <img alt="Icone Twitter" src={TwitterSVG} />
        </IconButton>
        <IconButton disabled>
          <img alt="Icone Facebook" src={FacebookSVG} />
        </IconButton>
      </div>
    </Card>
  )
}

export default React.memo(ComponentSocialMedia)
