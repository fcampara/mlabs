import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Card, IconButton } from '@mlabs/ui'
import 'src/pages/Schedule/SocialMedia/styles.css'
import { useFormContext } from 'react-hook-form'
import { ISchedulePost } from '../types'
import { FORM_NAME } from '../formInfo'
import { SocialNetwork } from 'src/@types/socialNetworks'
import { getAllSocialNetworks } from 'src/services/socialNetworks'

const ComponentSocialMedia: React.FC = () => {
  const [socialNetworks, setSocialNetworks] = useState<
    SocialNetwork[]
  >()
  const { setValue, watch } = useFormContext()
  const formSocialNetworks = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialNetworks']
  const getIndexSocialMidia = useCallback(
    (socialNetwork: SocialNetwork) => {
      return formSocialNetworks.findIndex(
        media => media.id === socialNetwork.id
      )
    },
    [formSocialNetworks]
  )

  const handleSelectSocialMedia = useCallback(
    (socialMidia: SocialNetwork) => () => {
      const socialNetworks = formSocialNetworks
      const index = getIndexSocialMidia(socialMidia)
      index >= 0
        ? socialNetworks.splice(index, 1)
        : socialNetworks.push(socialMidia)

      setValue(FORM_NAME.SOCIAL_MIDIAS, socialNetworks, {
        shouldDirty: true
      })
    },
    [formSocialNetworks, setValue, getIndexSocialMidia]
  )

  const isSelected = useCallback(
    (socialMidia: SocialNetwork) => {
      return formSocialNetworks.some(
        midia => socialMidia.id === midia.id
      )
    },
    [formSocialNetworks]
  )

  useEffect(() => {
    async function fetchSocialNetworks() {
      const responseSocialNetworks = await getAllSocialNetworks()
      setSocialNetworks(responseSocialNetworks)
    }

    fetchSocialNetworks()
  }, [])

  return (
    <Card title="Redes sociais">
      <div className="schedule__social-media">
        {socialNetworks?.map(socialNetwork => (
          <IconButton
            disabled={socialNetwork.status === 'disabled'}
            key={socialNetwork.id}
            selected={isSelected(socialNetwork)}
            onClick={handleSelectSocialMedia(socialNetwork)}
          >
            <i className={`fab fa-${socialNetwork.icon}`} />
          </IconButton>
        ))}
      </div>
    </Card>
  )
}

export default ComponentSocialMedia
