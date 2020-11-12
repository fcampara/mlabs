import React from 'react'
import { Card, DateInput, TimeInput } from '@mlabs/ui'
import 'src/pages/Schedule/PublishDate/styles.css'
import { Controller } from 'react-hook-form'
import { FORM_NAME } from 'src/pages/Schedule/formInfo'

const ComponentPublishDate: React.FC = () => {
  return (
    <Card
      title="Data de publicação"
      className="schedule--publish-date"
    >
      <div className="schedule--publish-date container">
        <Controller
          name={FORM_NAME.PUBLICATION_DATE}
          render={({ value, onChange }) => (
            <DateInput value={value} onChange={onChange} />
          )}
        />
        <Controller
          name={FORM_NAME.SCHEDULE_AT}
          render={({ value, onChange }) => (
            <TimeInput value={value} onChange={onChange} />
          )}
        />
      </div>
    </Card>
  )
}

export default React.memo(ComponentPublishDate)
