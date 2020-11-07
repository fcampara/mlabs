export interface ButtonProps {
  label: string;
  fullWidth?: boolean
  variant?: 'outline' | 'secondary' | 'contained'
  onClick?: () => void;
}
