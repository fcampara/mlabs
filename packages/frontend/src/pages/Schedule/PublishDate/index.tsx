import React from 'react'
import { Card, DateInput } from '@mlabs/ui'
import 'src/pages/Schedule/PublishDate/styles.css'

const ComponentPublishDate: React.FC = () => {
  return (
    <Card
      title="Data de publicação"
      className="schedule--publish-date"
    >
      <DateInput
        value={undefined}
        onChange={date => console.log(date)}
      />
    </Card>
  )
}

export default React.memo(ComponentPublishDate)
