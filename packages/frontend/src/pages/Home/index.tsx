import React, { useCallback } from 'react'
import PostSVG from 'src/assets/post.svg'
import { Button } from '@mlabs/ui'
import 'src/pages/Home/styles.css'
import { useHistory } from 'react-router-dom'
import { SCHEDULE } from 'src/routes/constants'

const PageHome: React.FC = () => {
  const history = useHistory()

  const goToSchedulePage = useCallback(() => {
    history.push(SCHEDULE)
  }, [])

  return (
    <div className="home__container">
      <img className="home__image" src={PostSVG} />
      <Button
        label="Agendar post"
        variant="secondary"
        onClick={() => goToSchedulePage()}
      />
    </div>
  )
}

export default PageHome
