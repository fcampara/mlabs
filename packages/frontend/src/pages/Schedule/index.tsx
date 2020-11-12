import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import SocialMedia from 'src/pages/Schedule/SocialMedia'
import PublishDate from 'src/pages/Schedule/PublishDate'
import UploadeImage from 'src/pages/Schedule/UploadeImage'
import RenderPost from 'src/pages/Schedule/RenderPost'
import TextPost from 'src/pages/Schedule/TextPost'
import Footer from 'src/pages/Schedule/Footer'
import 'src/pages/Schedule/styles.css'
import { FormProvider, useForm } from 'react-hook-form'
import { ISchedulePost } from 'src/pages/Schedule/types'
import {
  defaultValues,
  FORM_NAME
} from 'src/pages/Schedule/formInfo'
import { Prompt } from 'react-router-dom'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { LOCAL_STORAGE_SCHEDULE } from 'src/constants/localStorageKeys'
import { storeSchedules } from 'src/services/schedule'
import DialogSuccess from 'src/pages/Schedule/Success'

const PageSchedule: React.FC = () => {
  const {
    getLocalStorage,
    removeLocalStorage
  } = useLocalStorage<ISchedulePost>(LOCAL_STORAGE_SCHEDULE)
  const [open, setOpen] = useState(false)
  const scheduleStoraged = getLocalStorage()
  const methods = useForm<ISchedulePost>({
    defaultValues: {
      ...defaultValues,
      ...scheduleStoraged
    }
  })
  const {
    reset,
    register,
    handleSubmit,
    formState
  } = methods
  const { isDirty } = formState
  const handleClear = useCallback(() => {
    removeLocalStorage()
    reset(
      {
        ...defaultValues
      },
      {
        isDirty: false
      }
    )
  }, [reset, removeLocalStorage])
  const onSubmit = useCallback(
    async (schedulePost: ISchedulePost) => {
      const {
        scheduleAt,
        socialMidias,
        ...restSchedulePost
      } = schedulePost
      const [hours, minutes] = scheduleAt.split(' : ')
      schedulePost.publicationDate.setHours(Number(hours))
      schedulePost.publicationDate.setMinutes(
        Number(minutes)
      )
      const schedule = {
        ...restSchedulePost,
        socialNetworkKey: socialMidias.map(({ id }) => id)
      }

      await storeSchedules(schedule)
      setOpen(true)
      handleClear()
    },
    [handleClear]
  )

  useEffect(() => {
    const publicationDate =
      scheduleStoraged?.publicationDate

    reset({
      ...defaultValues,
      ...scheduleStoraged,
      [FORM_NAME.SCHEDULE_IN]: publicationDate
        ? new Date(publicationDate)
        : ''
    })
  }, [reset, scheduleStoraged])

  useEffect(() => {
    register(FORM_NAME.SOCIAL_MIDIAS)
    register(FORM_NAME.IMAGE_URL)
  }, [register])

  return (
    <>
      <Prompt
        when={isDirty}
        message={() =>
          'Existem alterações não salvas. Se deseja salvá-las, clique em "Cancelar" e depois em "Salvar Rascunho"'
        }
      />
      <DialogSuccess open={open} />
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
