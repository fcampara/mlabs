import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Container, Message } from './styles'
import Button from '../Button'
import uploaderSVG from '../icons/uploader.svg'

const ComponentFileInput: React.FC = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    // Do something with the files
  }, [])
  const { getRootProps, open, getInputProps } = useDropzone(
    {
      onDrop,
      noClick: true,
      noKeyboard: true
    }
  )
  return (
    <Container {...getRootProps()}>
      <img
        className="hide-mobile"
        alt="Icone de upload"
        src={uploaderSVG}
      />
      <Message className="hide-mobile">
        Arraste e solte uma imagem aqui ou clique no botão
        abaixo
      </Message>
      <input {...getInputProps()} />
      <Button
        size="sm"
        variant="outline"
        label="Pesquisar imagens"
        onClick={open}
      />
    </Container>
  )
}

export default ComponentFileInput
