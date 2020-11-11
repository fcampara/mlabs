import React, { useCallback, useEffect } from 'react'
import { Card, FileInput } from '@mlabs/ui'
import 'src/pages/Schedule/UploadeImage/styles.css'
import firebase from 'src/lib/firebase'
import { useFormContext } from 'react-hook-form'
import { FORM_NAME } from 'src/pages/Schedule/formInfo'
const ComponentUploadImage: React.FC = () => {
  const { setValue, register } = useFormContext()

  const setRefStorageName = useCallback((name: string) => {
    return `/posts/images/${name}-${new Date().toISOString()}`
  }, [])

  const handleUpload = useCallback(
    files => {
      const [file] = files
      const name = file.name.split('.')[0]
      const storageRef = firebase
        .storage()
        .ref(setRefStorageName(name))
      const uploadTask = storageRef.put(file)
      uploadTask.on(
        'state_changed',
        undefined,
        undefined,
        async () => {
          const imageUrl = await uploadTask.snapshot.ref.getDownloadURL()
          setValue(FORM_NAME.IMAGE_URL, imageUrl)
        }
      )
    },
    [setValue, setRefStorageName]
  )

  useEffect(() => {
    register(FORM_NAME.IMAGE_URL)
  }, [])

  return (
    <Card
      title="Upload de imagem"
      className="schedule--upload-image"
    >
      <FileInput onChange={handleUpload} />
    </Card>
  )
}

export default React.memo(ComponentUploadImage)
