export interface FileInputProps {
  onChange: <T extends File>(acceptedFiles: T[]) => void
  label?: string
  disabled?: boolean
}
