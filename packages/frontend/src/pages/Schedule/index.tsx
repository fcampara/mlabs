import React from 'react'
import SocialMedia from 'src/pages/Schedule/SocialMedia'
import PublishDate from 'src/pages/Schedule/PublishDate'
import UploadeImage from 'src/pages/Schedule/UploadeImage'
import RenderPost from 'src/pages/Schedule/RenderPost'
import TextPost from 'src/pages/Schedule/TextPost'
import Footer from 'src/pages/Schedule/Footer'
import 'src/pages/Schedule/styles.css'

const PageSchedule: React.FC = () => {
  return (
    <>
      <div className="schedule__container">
        <SocialMedia />
        <PublishDate />
        <TextPost />
        <UploadeImage />
        <RenderPost />
      </div>
      <Footer />
    </>
  )
}

export default React.memo(PageSchedule)
