import React, { useRef } from 'react'
import { Textarea, Container } from './styles'
import { EmojiInputProps } from './types'
import Button from '../Button'
import Popover from '../Popover'

const EMOJIS = [
  'em-grinning',
  'em-smiley',
  'em-smile',
  'em-grin',
  'em-laughing',
  'em-sweat_smile',
  'em-rolling_on_the_floor_laughing',
  'em-joy',
  'em-slightly_smiling_face',
  'em-upside_down_face',
  'em-wink',
  'em-blush',
  'em-innocent',
  'em-smiling_face_with_3_hearts',
  'em-heart_eyes',
  'em-star-struck',
  'em-kissing_heart',
  'em-kissing',
  'em-relaxed',
  'em-kissing_closed_eyes',
  'em-kissing_smiling_eyes',
  'em-yum',
  'em-stuck_out_tongue',
  'em-stuck_out_tongue_winking_eye',
  'em-zany_face'
]

const ComponentEmojiInput: React.FC<EmojiInputProps> = ({
  onChange
}) => {
  const textAreaRef = useRef<HTMLDivElement>(null)

  const setPosition = () => {
    if (!textAreaRef.current) return
    const range = document.createRange()
    const selection = window.getSelection()
    const { childNodes = [] } = textAreaRef.current
    range.setStart(childNodes[childNodes.length - 1], 0)
    range.collapse(true)

    selection?.removeAllRanges()
    selection?.addRange(range)
  }

  const handleChangeEmoji = (emojiClassName: string) => {
    if (!textAreaRef.current) return
    textAreaRef.current.innerHTML += `<i class="em ${emojiClassName}"/>`
    textAreaRef.current.innerHTML += '<text>&nbsp;</text>'

    onChange(textAreaRef.current.innerHTML)
    setPosition()
  }

  return (
    <Container>
      <Popover>
        <Button variant="contained">
          <span>&#128515;</span>
        </Button>
        <div className="emoji__container">
          {EMOJIS.map(emojiClassName => (
            <Button
              key={emojiClassName}
              variant="contained"
              onClick={() =>
                handleChangeEmoji(emojiClassName)
              }
            >
              <i
                className={`emoji__item em ${emojiClassName}`}
              ></i>
            </Button>
          ))}
        </div>
      </Popover>

      <Textarea
        contentEditable
        ref={textAreaRef}
        onInput={event =>
          onChange(event.currentTarget.innerHTML)
        }
      ></Textarea>
    </Container>
  )
}

export default ComponentEmojiInput
