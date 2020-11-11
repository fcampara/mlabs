import React from 'react'
import { Card, CardSocial } from '@mlabs/ui/dist'
import EmptyState from 'src/pages/Schedule/RenderPost/EmptyState'
import 'src/pages/Schedule/RenderPost/styles.css'
import { useFormContext } from 'react-hook-form'
import { ISchedulePost } from '../types'

const ComponentRenderPost: React.FC = () => {
  const { watch } = useFormContext()
  const post = watch('post') as ISchedulePost['post']
  const username = watch(
    'username'
  ) as ISchedulePost['username']
  const socialMidias = watch(
    'socialMidias'
  ) as ISchedulePost['socialMidias']
  const scheduleIn = watch(
    'scheduleIn'
  ) as ISchedulePost['scheduleIn']

  console.log(post, socialMidias, scheduleIn)
  return (
    <Card
      title="Visualização do post"
      className="schedule--post"
    >
      {!socialMidias.length && <EmptyState />}
      {socialMidias.map(social => (
        <CardSocial
          key={social}
          social={social}
          image=""
          username={username}
          post={post}
          date={scheduleIn}
        />
      ))}
    </Card>
  )
}

export default ComponentRenderPost
