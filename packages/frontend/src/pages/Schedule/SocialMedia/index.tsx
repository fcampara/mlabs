import React, { useCallback, useEffect } from 'react'
import { Card, IconButton } from '@mlabs/ui'
import 'src/pages/Schedule/SocialMedia/styles.css'
import InstagramSVG from 'src/assets/instagram.svg'
import LinkedinSVG from 'src/assets/linkedin.svg'
import YoutubeSVG from 'src/assets/youtube.svg'
import PinterestSVG from 'src/assets/pinterest.svg'
import TwitterSVG from 'src/assets/twitter.svg'
import FacebookSVG from 'src/assets/facebook.svg'
import { SocialMidias } from 'src/@types/socialMidias'
import { useFormContext } from 'react-hook-form'
import { ISchedulePost } from '../types'

const ComponentSocialMedia: React.FC = () => {
  const { setValue, register, watch } = useFormContext()
  const formSocialMidias = watch(
    'socialMidias'
  ) as ISchedulePost['socialMidias']

  const getIndexSocialMidia = useCallback(
    socialMidia => {
      return formSocialMidias.findIndex(
        midia => midia === socialMidia
      )
    },
    [formSocialMidias]
  )

  const handleSelectSocialMidia = useCallback(
    (socialMidia: SocialMidias) => () => {
      const socialMidias = formSocialMidias
      const index = getIndexSocialMidia(socialMidia)
      index >= 0
        ? socialMidias.splice(index, 1)
        : socialMidias.push(socialMidia)

      setValue('socialMidias', socialMidias)
    },
    [setValue, getIndexSocialMidia]
  )

  const isSelected = useCallback(
    (socialMidia: SocialMidias) =>
      formSocialMidias.some(midia => socialMidia === midia),
    [formSocialMidias]
  )

  useEffect(() => {
    register('socialMidias')
  }, [register])

  return (
    <Card title="Redes sociais">
      <div className="schedule__social-media">
        <IconButton
          selected={isSelected('instagram')}
          onClick={handleSelectSocialMidia('instagram')}
        >
          <img alt="Icone instagram" src={InstagramSVG} />
        </IconButton>
        <IconButton
          selected={isSelected('linkedin')}
          onClick={handleSelectSocialMidia('linkedin')}
        >
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
