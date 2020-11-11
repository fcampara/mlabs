import React, { useCallback, useMemo } from 'react'
import { Button } from '@mlabs/ui'
import 'src/pages/Schedule/Footer/styles.css'
import { useHistory } from 'react-router-dom'
import { HOME } from 'src/routes/constants'
import { useFormContext } from 'react-hook-form'
import { FORM_NAME } from '../formInfo'
import { ISchedulePost } from '../types'
import { useWindowSize } from 'src/hooks/useWindowSize'

const ComponentFooter: React.FC = () => {
  const { watch } = useFormContext()
  const socialMidias = watch(
    FORM_NAME.SOCIAL_MIDIAS
  ) as ISchedulePost['socialMidias']
  const scheduleAt = watch(
    FORM_NAME.SCHEDULE_AT
  ) as ISchedulePost['scheduleAt']
  const scheduleIn = watch(
    FORM_NAME.SCHEDULE_IN
  ) as ISchedulePost['scheduleIn']
  const history = useHistory()
  const { width } = useWindowSize()
  const isSmallScreen = useMemo(() => {
    return width <= 768
  }, [width])

  const goToHome = useCallback(() => {
    history.replace(HOME)
  }, [])

  const draftLabel = useMemo(
    () => (isSmallScreen ? 'Rascunho' : 'Salvar Rascunho'),
    [isSmallScreen]
  )

  const disableButton = useMemo(() => {
    return (
      !socialMidias.length || !scheduleAt || !scheduleIn
    )
  }, [socialMidias, scheduleAt, scheduleIn])

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
      />
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
