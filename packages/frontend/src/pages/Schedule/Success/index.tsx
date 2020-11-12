import React, { useCallback } from 'react'
import 'src/pages/Schedule/Success/styles.css'
import { Button, Dialog } from '@mlabs/ui'
import CoolEmojiSVG from 'src/assets/coolEmoji.svg'
import { ScheduleDialogSuccess } from './types'
import { useHistory } from 'react-router-dom'
import { SCHEDULES } from 'src/routes/constants'

const ComponentSuccess: React.FC<ScheduleDialogSuccess> = ({
  open
}) => {
  const history = useHistory()

  const goToSchedulesPage = useCallback(() => {
    history.push(SCHEDULES)
  }, [])

  return (
    <Dialog className="schedule--dialog" open={open}>
      <img src={CoolEmojiSVG} />
      <span className="schedule--dialog__message">
        Agendado com sucesso
      </span>
      <Button label="OK" onClick={goToSchedulesPage} />
    </Dialog>
  )
}

export default ComponentSuccess
