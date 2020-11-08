import React, {
  useCallback,
  useMemo,
  useState
} from 'react'
import { Button } from '@mlabs/ui'
import 'src/pages/Schedule/Footer/styles.css'
import { useHistory } from 'react-router-dom'
import { HOME } from 'src/routes/constants'

const ComponentFooter: React.FC = () => {
  const history = useHistory()
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  window
    .matchMedia('(max-width: 768px)')
    .addEventListener('change', event => {
      setIsSmallScreen(event.matches)
    })

  const goToHome = useCallback(() => {
    history.replace(HOME)
  }, [])

  const draftLabel = useMemo(
    () => (isSmallScreen ? 'Rascunho' : 'Salvar Rascunho'),
    [isSmallScreen]
  )

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
      <Button label="Agendar" size="sm" />
    </footer>
  )
}

export default ComponentFooter
