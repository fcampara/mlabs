import React, { useCallback } from 'react'
import SocialMedia from 'src/pages/Schedule/SocialMedia'
import PublishDate from 'src/pages/Schedule/PublishDate'
import UploadeImage from 'src/pages/Schedule/UploadeImage'
import RenderPost from 'src/pages/Schedule/RenderPost'
import TextPost from 'src/pages/Schedule/TextPost'
import Footer from 'src/pages/Schedule/Footer'
import 'src/pages/Schedule/styles.css'
import { FormProvider, useForm } from 'react-hook-form'
import { ISchedulePost } from 'src/pages/Schedule/types'

const PageSchedule: React.FC = () => {
  const methods = useForm<ISchedulePost>({
    defaultValues: {
      imageUrl: '',
      post: '',
      scheduleAt: '',
      scheduleIn: '',
      socialMidias: [],
      username: 'Anselmo Carlos'
    }
  })
  const { handleSubmit } = methods

  const onSubmit = useCallback(
    (schedulePost: ISchedulePost) => {
      console.log('submit', schedulePost)
    },
    []
  )

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="schedule__container"
      >
        <SocialMedia />
        <PublishDate />
        <TextPost />
        <UploadeImage />
        <RenderPost />
      </form>
      <Footer />
    </FormProvider>
  )
}

export default React.memo(PageSchedule)
