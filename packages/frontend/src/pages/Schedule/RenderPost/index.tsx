import React from 'react'
import { Card, CardSocial } from '@mlabs/ui/dist'
import EmptyState from 'src/pages/Schedule/RenderPost/EmptyState'
import 'src/pages/Schedule/RenderPost/styles.css'
import { useFormContext } from 'react-hook-form'
import { ISchedulePost } from 'src/pages/Schedule/types'
import { FORM_NAME } from 'src/pages/Schedule/formInfo'

const ComponentRenderPost: React.FC = () => {
  const { watch } = useFormContext()
  const text = watch(
    FORM_NAME.TEXT
  ) as ISchedulePost['text']
  const username = watch(
    FORM_NAME.USERNAME
  ) as ISchedulePost['username']
  const socialNetworks = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialNetworks']
  const publicationDate = watch(
    FORM_NAME.PUBLICATION_DATE
  ) as ISchedulePost['publicationDate']
  const media = watch(
    FORM_NAME.MEDIA
  ) as ISchedulePost['media']

  return (
    <Card
      title="Visualização do post"
      className="schedule--post"
    >
      <div className="schedule--post container">
        {!socialNetworks.length && <EmptyState />}
        {socialNetworks.map(socialNetwork => (
          <CardSocial
            key={socialNetwork.id}
            social={socialNetwork.name}
            image={media}
            username={username}
            post={text}
            date={publicationDate}
          />
        ))}
      </div>
    </Card>
  )
}

export default ComponentRenderPost
