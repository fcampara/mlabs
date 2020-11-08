import React from 'react'
import { Card, FileInput } from '@mlabs/ui'
import 'src/pages/Schedule/UploadeImage/styles.css'

const ComponentUploadImage: React.FC = () => {
  return (
    <Card
      title="Upload de imagem"
      className="schedule--upload-image"
    >
      <FileInput />
    </Card>
  )
}

export default React.memo(ComponentUploadImage)