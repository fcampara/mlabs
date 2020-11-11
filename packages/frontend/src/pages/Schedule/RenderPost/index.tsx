import React from 'react'
import { Card, CardSocial } from '@mlabs/ui/dist'
import EmptyState from 'src/pages/Schedule/RenderPost/EmptyState'
import 'src/pages/Schedule/RenderPost/styles.css'
import { useFormContext } from 'react-hook-form'
import { ISchedulePost } from 'src/pages/Schedule/types'
import { FORM_NAME } from 'src/pages/Schedule/formInfo'

const ComponentRenderPost: React.FC = () => {
  const { watch } = useFormContext()
  const post = watch(
    FORM_NAME.POST
  ) as ISchedulePost['post']
  const username = watch(
    FORM_NAME.USERNAME
  ) as ISchedulePost['username']
  const socialMidias = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialMidias']
  const scheduleIn = watch(
    FORM_NAME.SCHEDULE_IN
  ) as ISchedulePost['publicationDate']
  const image = watch(
    FORM_NAME.IMAGE_URL
  ) as ISchedulePost['imageUrl']

  return (
    <Card
      title="Visualização do post"
      className="schedule--post"
    >
      <div className="schedule--post container">
        {!socialMidias.length && <EmptyState />}
        {socialMidias.map(social => (
          <CardSocial
            key={social.id}
            social={social.name}
            image={image}
            username={username}
            post={post}
            date={scheduleIn}
          />
        ))}
      </div>
    </Card>
  )
}

export default ComponentRenderPost
