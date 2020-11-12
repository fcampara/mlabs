import React, {
  useCallback,
  useMemo,
  useState
} from 'react'
import { Button } from '@mlabs/ui'
import 'src/pages/Schedule/Footer/styles.css'
import { useHistory } from 'react-router-dom'
import { HOME } from 'src/routes/constants'
import { useFormContext } from 'react-hook-form'
import { FORM_NAME } from '../formInfo'
import { ISchedulePost } from '../types'
import { useWindowSize } from 'src/hooks/useWindowSize'
import { useLocalStorage } from 'src/hooks/useLocalStorage'
import { SCREEN_MD } from 'src/constants/mediaQueries'

const ComponentFooter: React.FC = () => {
  const { setLocalStorage } = useLocalStorage('schedule')
  const [saved, setSaved] = useState(false)
  const { watch, getValues } = useFormContext()
  const socialNetworks = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialNetworks']
  const scheduleAt = watch(
    FORM_NAME.SCHEDULE_AT
  ) as ISchedulePost['scheduleAt']
  const publicationDate = watch(
    FORM_NAME.PUBLICATION_DATE
  ) as ISchedulePost['publicationDate']
  const history = useHistory()
  const { width } = useWindowSize()
  const isSmallScreen = useMemo(() => {
    return width <= SCREEN_MD
  }, [width])

  const handleSaveDraft = useCallback(() => {
    setLocalStorage(getValues())
    setSaved(true)
    setTimeout(() => setSaved(false), 1000)
  }, [getValues, setLocalStorage])

  const goToHome = useCallback(() => {
    history.replace(HOME)
  }, [])

  const draftLabel = useMemo(
    () => (isSmallScreen ? 'Rascunho' : 'Salvar Rascunho'),
    [isSmallScreen]
  )

  const disableButton = useMemo(() => {
    return (
      !socialNetworks.length ||
      !scheduleAt ||
      !publicationDate
    )
  }, [socialNetworks, scheduleAt, publicationDate])

  return (
    <footer className="schedule__footer">
      <Button
        label="Cancelar"
        variant="contained"
        size="sm"
        onClick={() => goToHome()}
      />
      <Button
        label={draftLabel}
        variant="outline"
        size="sm"
        onClick={handleSaveDraft}
      >
        {saved && (
          <>
            Salvo{' '}
            <i className="schedule__footer--success fas fa-check" />
          </>
        )}
      </Button>
      <Button
        label="Agendar"
        type="submit"
        disabled={disableButton}
        size="sm"
      />
    </footer>
  )
}

export default ComponentFooter
