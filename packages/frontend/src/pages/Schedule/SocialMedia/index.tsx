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
  const formSocialMidias = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialMidias']
  const getIndexSocialMidia = useCallback(
    (socialMidia: SocialNetwork) => {
      return formSocialMidias.findIndex(
        midia => midia.id === socialMidia.id
      )
    },
    [formSocialMidias]
  )

  const handleSelectSocialMidia = useCallback(
    (socialMidia: SocialNetwork) => () => {
      const socialMidias = formSocialMidias
      const index = getIndexSocialMidia(socialMidia)
      index >= 0
        ? socialMidias.splice(index, 1)
        : socialMidias.push(socialMidia)

      console.log('setValue')
      setValue(FORM_NAME.SOCIAL_MIDIAS, socialMidias, {
        shouldDirty: true
      })
    },
    [setValue, getIndexSocialMidia]
  )

  const isSelected = useCallback(
    (socialMidia: SocialNetwork) => {
      return formSocialMidias.some(
        midia => socialMidia.id === midia.id
      )
    },
    [formSocialMidias]
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
            onClick={handleSelectSocialMidia(socialNetwork)}
          >
            <i className={`fab fa-${socialNetwork.icon}`} />
          </IconButton>
        ))}
      </div>
    </Card>
  )
}

export default ComponentSocialMedia
