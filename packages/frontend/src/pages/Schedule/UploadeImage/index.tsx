import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Card, FileInput } from '@mlabs/ui'
import 'src/pages/Schedule/UploadeImage/styles.css'
import firebase from 'src/lib/firebase'
import { useFormContext } from 'react-hook-form'
import { FORM_NAME } from 'src/pages/Schedule/formInfo'
const ComponentUploadImage: React.FC = () => {
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      uploadTask.on(
        'state_changed',
        undefined,
        () => setLoading(false),
        async () => {
          const imageUrl = await uploadTask.snapshot.ref.getDownloadURL()
          setValue(FORM_NAME.IMAGE_URL, imageUrl)
          setLoading(false)
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
      <FileInput
        disabled={loading}
        label={
          loading ? 'Carregando...' : 'Pesquisar imagens'
        }
        onChange={handleUpload}
      />
    </Card>
  )
}

export default React.memo(ComponentUploadImage)
