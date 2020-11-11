import React from 'react'
import { Card, EmojiInput } from '@mlabs/ui/dist'
import 'src/pages/Schedule/TextPost/styles.css'
import { Controller } from 'react-hook-form'
import { FORM_NAME } from '../formInfo'

const ComponentTextPost: React.FC = () => {
  return (
    <Card
      title="Texto do post"
      className="schedule--text-post"
    >
      <Controller
        name={FORM_NAME.POST}
        render={({ value, onChange }) => (
          <EmojiInput
            placeholder="Aqui vai o texto descritivo desse post"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Card>
  )
}

export default ComponentTextPost
