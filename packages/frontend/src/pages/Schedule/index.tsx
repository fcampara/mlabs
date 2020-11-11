import React, { useCallback, useEffect } from 'react'
import SocialMedia from 'src/pages/Schedule/SocialMedia'
import PublishDate from 'src/pages/Schedule/PublishDate'
import UploadeImage from 'src/pages/Schedule/UploadeImage'
import RenderPost from 'src/pages/Schedule/RenderPost'
import TextPost from 'src/pages/Schedule/TextPost'
import Footer from 'src/pages/Schedule/Footer'
import 'src/pages/Schedule/styles.css'
import { FormProvider, useForm } from 'react-hook-form'
import { ISchedulePost } from 'src/pages/Schedule/types'
import { defaultValues } from 'src/pages/Schedule/formInfo'
import { Prompt } from 'react-router-dom'

const PageSchedule: React.FC = () => {
  const methods = useForm<ISchedulePost>({
    defaultValues
  })
  const {
    reset,
    register,
    handleSubmit,
    formState
  } = methods
  const { isDirty } = formState
  const onSubmit = useCallback(
    (schedulePost: ISchedulePost) => {
      console.log('submit', schedulePost)
    },
    []
  )

  useEffect(() => {
    reset({
      socialMidias: []
    })
  }, [reset])

  useEffect(() => {
    register('socialMidias')
  }, [register])

  return (
    <>
      <Prompt
        when={isDirty}
        message={() =>
          'Existem alterações não salvas. Se deseja salvá-las, clique em "Cancelar" e depois em "Salvar Rascunho"'
        }
      />
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
          <Footer />
        </form>
      </FormProvider>
    </>
  )
}

export default PageSchedule
