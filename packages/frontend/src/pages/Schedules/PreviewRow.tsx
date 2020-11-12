import {
  Button,
  CardSocial,
  Dialog,
  IconButton
} from '@mlabs/ui/dist'
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import { SocialNetworks } from 'src/@types/socialNetworks'
import { TableScheduleSocialNetworkRow } from 'src/pages/Schedules/types'

const ComponentPreviewRow: React.FC<TableScheduleSocialNetworkRow> = ({
  schedule,
  socialNetworks
}) => {
  const [open, setOpen] = useState(false)
  const [
    selectedSocialNetwork,
    setSelectedSocialNetwork
  ] = useState<SocialNetworks>('Linkedin')

  const getSocialNetwork = useCallback(
    (id: number) => {
      return socialNetworks?.find(
        socialNetwork => socialNetwork.id === id
      )
    },
    [socialNetworks]
  )

  const isSelected = useCallback(
    (socialNetworkName: string) => {
      return selectedSocialNetwork === socialNetworkName
    },
    [selectedSocialNetwork]
  )

  const showMoreSocialMedias = useMemo(
    () => schedule.socialNetworkKey.length > 1,
    [schedule]
  )

  useEffect(() => {
    const firstSocialNetwork = schedule.socialNetworkKey[0]
    const socialNetwork = getSocialNetwork(
      firstSocialNetwork
    )

    setSelectedSocialNetwork(socialNetwork?.name)
  }, [schedule, getSocialNetwork])

  const OptionsSocialMedias: React.FC = useCallback(
    () => (
      <>
        {schedule.socialNetworkKey.map(socialId => {
          const socialNetwork = getSocialNetwork(socialId)
          return (
            <IconButton
              key={socialId}
              selected={isSelected(socialNetwork?.name)}
              onClick={() =>
                setSelectedSocialNetwork(
                  socialNetwork?.name
                )
              }
            >
              <i
                className={`fab fa-${socialNetwork?.icon}`}
              />
            </IconButton>
          )
        })}
      </>
    ),
    [schedule, isSelected, getSocialNetwork]
  )

  return (
    <>
      <td align="center">
        <div
          onClick={() => setOpen(true)}
          className="schedules--preview"
        >
          Preview
        </div>
      </td>
      <Dialog
        className="schedules--preview__card"
        open={open}
      >
        <div className="schedules--preview__socials">
          {showMoreSocialMedias && <OptionsSocialMedias />}
        </div>
        <CardSocial
          social={selectedSocialNetwork}
          image={schedule.media}
          date={new Date(schedule.publicationDate)}
          post={schedule.text}
          username={'Anselmo Carlos'}
        />
        <Button
          className="schedules--preview__button"
          label="Fechar"
          onClick={() => setOpen(false)}
        />
      </Dialog>
    </>
  )
}

export default ComponentPreviewRow
