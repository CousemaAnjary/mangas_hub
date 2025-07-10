import { ButtonProps } from "../components/ui/button"

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
  loadingText?: string
  children: React.ReactNode
}

export type CommandMenuProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type SearchButtonProps = {
  onClick: () => void
}