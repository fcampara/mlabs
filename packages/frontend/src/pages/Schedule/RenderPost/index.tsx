import React from 'react'
import { Card } from '@mlabs/ui/dist'
import EmptyState from 'src/pages/Schedule/RenderPost/EmptyState'
import 'src/pages/Schedule/RenderPost/styles.css'

const ComponentRenderPost: React.FC = () => {
  return (
    <Card
      title="Visualização do post"
      className="schedule--post"
    >
      <EmptyState />
    </Card>
  )
}

export default ComponentRenderPost
