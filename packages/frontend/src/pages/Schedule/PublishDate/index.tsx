import React from 'react'
import { Card, DateInput, TimeInput } from '@mlabs/ui'
import 'src/pages/Schedule/PublishDate/styles.css'
import { Controller } from 'react-hook-form'

const ComponentPublishDate: React.FC = () => {
  return (
    <Card
      title="Data de publicação"
      className="schedule--publish-date"
    >
      <div className="schedule--publish-date container">
        <Controller
          name="scheduleIn"
          render={({ value, onChange }) => (
            <DateInput value={value} onChange={onChange} />
          )}
        />
        <Controller
          name="scheduleAt"
          render={({ value, onChange }) => (
            <TimeInput value={value} onChange={onChange} />
          )}
        />
      </div>
    </Card>
  )
}

export default React.memo(ComponentPublishDate)
