export interface FileInputProps {
  onChange: <T extends File>(acceptedFiles: T[]) => void
}
