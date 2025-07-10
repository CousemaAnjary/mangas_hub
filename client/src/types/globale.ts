import { ButtonProps } from "../components/ui/button"

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
}