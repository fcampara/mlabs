import React from 'react'
import PostReviewSVG from 'src/assets/post-review.svg'
import 'src/pages/Schedule/RenderPost/EmptyState/styles.css'

const ComponentRenderPostEmptyState: React.FC = () => {
  return (
    <div className="schedule--post empty-state">
      <span>
        Aguardando conteúdo. Informe os canais e as
        <br /> mídias desejadas para visualização
      </span>
      <img alt="Conteúdo vazio" src={PostReviewSVG} />
    </div>
  )
}

export default ComponentRenderPostEmptyState
